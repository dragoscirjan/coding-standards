var appRoot = 'src/';
var outputRoot = 'dist/';
var exportSrvRoot = 'export/';

module.exports = {
  root: appRoot,
  source: appRoot + '**/*.js',
  html: appRoot + '**/*.html',
  less: appRoot + '**/*.less',
  md: appRoot + '**/*.md',
  css: appRoot + '**/*.css',
  style: 'styles/**/*.css',
  output: outputRoot,
  exportSrv: exportSrvRoot,
  doc: './doc',
  e2eSpecsSrc: 'test/e2e/src/**/*.js',
  e2eSpecsDist: 'test/e2e/dist/',
  md_merge: {
    home: appRoot + '*.md',
    recommend: appRoot + 'recommend/*.md',
    style: appRoot + 'style/*.md'
  }
};
