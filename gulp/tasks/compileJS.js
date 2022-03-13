// собираем JS
const config = require('../../webpack.config.js');

module.exports = function () {
  $.gulp.task('compileJS', () => {
    return $.gulp
      .src($.gulpConfig.js.src)
      .pipe($.webpackStream(config), $.webpack)
      .pipe($.gulpif($.yargs, $.uglify()))
      .pipe($.rename({ suffix: '.min' }))
      .pipe($.gulp.dest($.gulpConfig.js.dist))
      .pipe($.browserSync.stream());
  });
};
