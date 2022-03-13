// следим за изменениями файлов
module.exports = function () {
  $.gulp.task('watch', done => {
    $.gulp.watch($.gulpConfig.views.watch, $.gulp.series('compilePUG'));
    $.gulp.watch($.gulpConfig.styles.watch, $.gulp.series('compileSCSS', 'stylelint'));
    $.gulp.watch($.gulpConfig.js.watch, $.gulp.series('compileJS'));
    $.gulp.watch($.gulpConfig.img.watch, $.gulp.series('compileIMG'));
    $.gulp.watch($.gulpConfig.fonts.watch, $.gulp.series('fonts'));
    done();
  });
};
