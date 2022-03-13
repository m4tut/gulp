module.exports = function () {
  $.gulp.task('stylelint', function () {
    return $.gulp.src($.gulpConfig.stylelint.src).pipe(
      $.stylelint({
        reporters: [{ formatter: 'string', console: true }],
      })
    );
  });
};
