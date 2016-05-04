var gulp = require('gulp');
var paths = require('../paths');
var browserSync = require('browser-sync');

// outputs changes to files to the console
function reportChange(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
}

// this task wil watch for changes
// to js, html, and css files and call the
// reportChange method. Also, by depending on the
// serve task, it will instantiate a browserSync session
gulp.task('watch', ['serve'], function() {
  gulp.watch(paths.source, ['build-system', browserSync.reload]).on('change', reportChange);
  gulp.watch(paths.html, ['build-html', browserSync.reload]).on('change', reportChange);
  gulp.watch(paths.md, ['build-md', browserSync.reload]).on('change', reportChange);
  gulp.watch(paths.md, ['build-md-merge-home', browserSync.reload]).on('change', reportChange);
  gulp.watch(paths.md, ['build-md-merge-recommend', browserSync.reload]).on('change', reportChange);
  gulp.watch(paths.md, ['build-md-merge-style', browserSync.reload]).on('change', reportChange);
  gulp.watch(paths.md, ['build-md-merge-style-html', browserSync.reload]).on('change', reportChange);
  gulp.watch(paths.css, ['build-css']).on('change', reportChange);
  gulp.watch(paths.less, ['build-less']).on('change', reportChange);
  gulp.watch(paths.style, function() {
    return gulp.src(paths.style)
      .pipe(browserSync.stream());
  }).on('change', reportChange);
});
