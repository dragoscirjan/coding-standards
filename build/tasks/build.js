var gulp = require('gulp');
var runSequence = require('run-sequence');
var changed = require('gulp-changed');
var plumber = require('gulp-plumber');
var to5 = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
var paths = require('../paths');
var compilerOptions = require('../babel-options');
var assign = Object.assign || require('object.assign');
var notify = require('gulp-notify');
var browserSync = require('browser-sync');
var markdown = require('gulp-markdown');
var wrap = require('gulp-wrap');
var replace = require('gulp-replace');
var less = require('gulp-less');
var concat = require('gulp-concat');

// transpiles changed es6 files to SystemJS format
// the plumber() call prevents 'pipe breaking' caused
// by errors from other gulp plugins
// https://www.npmjs.com/package/gulp-plumber
gulp.task('build-system', function() {
  return gulp.src(paths.source)
    .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
    .pipe(changed(paths.output, {extension: '.js'}))
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(to5(assign({}, compilerOptions, {modules: 'system'})))
    .pipe(sourcemaps.write({includeContent: true}))
    .pipe(gulp.dest(paths.output));
});

// copies changed html files to the output directory
gulp.task('build-html', function() {
  return gulp.src(paths.html)
    .pipe(changed(paths.output, {extension: '.html'}))
    .pipe(gulp.dest(paths.output));
});

// copies changed html files to the output directory
gulp.task('build-less', function() {
  return gulp.src(paths.less)
    .pipe(less())
    .pipe(changed(paths.output, {extension: '.css'}))
    .pipe(gulp.dest(paths.output));
});

// copies changed md files to the output directory
gulp.task('build-md', function() {
  return gulp.src(paths.md)
    .pipe(markdown())
    .pipe(wrap('<template><section class="au-animate"><div class="container bs-docs-container"><div class="row">' +
      '<%= contents %>' +
      '</div></div></section></template>'))
    .pipe(replace(/<!\-\- \-\-lang\-ex \-\->/gi, '<div class="lang-ex">'))
    .pipe(replace(/<!\-\- \-\-lang\-ex-end \-\->/gi, '</div>'))
    .pipe(replace(/<p><strong>Note<\/strong>/gi, '<p class="note"><strong>Note</strong>'))
    .pipe(replace(/([\w\-]+).md/gi, function($1) { return '/#/' + $1.replace('.md', ''); }))
    .pipe(changed(paths.output, {extension: '.html'}))
    .pipe(gulp.dest(paths.output));
});

gulp.task('build-md-merge-home', function() {
  return gulp.src(paths.md_merge.home)
    .pipe(changed(paths.output, {extension: '.md'}))
    .pipe(gulp.dest(paths.output + '/../doc'));
});

gulp.task('build-md-merge-recommend', function() {
  return gulp.src(paths.md_merge.recommend)
    .pipe(concat('recommend.md'))
    .pipe(gulp.dest(paths.output + '/../doc'));
});

gulp.task('build-md-merge-style', function() {
  return gulp.src(paths.md_merge.style)
    .pipe(concat('style.md'))
    .pipe(gulp.dest(paths.output + '/../doc'));
});

// copies changed css files to the output directory
gulp.task('build-css', function() {
  return gulp.src(paths.css)
    .pipe(changed(paths.output, {extension: '.css'}))
    .pipe(gulp.dest(paths.output))
    .pipe(browserSync.stream());
});

// this task calls the clean task (located
// in ./clean.js), then runs the build-system
// and build-html tasks in parallel
// https://www.npmjs.com/package/gulp-run-sequence
gulp.task('build', function(callback) {
  return runSequence(
    'clean',
    ['build-system', 'build-html', 'build-less', 'build-md', 'build-css'],
    ['build-md-merge-home', 'build-md-merge-recommend', 'build-md-merge-style'],
    callback
  );
});
