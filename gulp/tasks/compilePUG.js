// собираем PUG
module.exports = function () {
  $.gulp.task('compilePUG', () => {
    return $.gulp
      .src($.gulpConfig.views.src)
      .pipe(
        $.pug({
          pretty: true,
        })
      )
      .pipe($.gulp.dest($.gulpConfig.views.dist))
      .pipe($.browserSync.stream());
  });
};
