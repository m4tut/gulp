// шрифты
module.exports = function () {
  $.gulp.task('fonts', function () {
    return $.gulp.src($.gulpConfig.fonts.src).pipe($.gulp.dest($.gulpConfig.fonts.dist));
  });
};
