module.exports = function () {
  $.gulp.task('compileIMG', () => {
    return $.gulp
      .src($.gulpConfig.img.src)
      .pipe($.gulpif($.yargs, $.newer($.gulpConfig.img.dist)))
      .pipe(
        $.gulpif(
          $.yargs,
          $.imagemin([
            $.imagemin.gifsicle({ interlaced: true }),
            $.imagemin.mozjpeg({ quality: 75, progressive: true }),
            $.imagemin.optipng({ optimizationLevel: 5 }),
            $.imagemin.svgo({
              plugins: [
                { removeViewBox: false },
                { removeUnusedNS: false },
                { removeUselessStrokeAndFill: false },
                { cleanupIDs: false },
                { removeComments: true },
                { removeEmptyAttrs: true },
                { removeEmptyText: true },
                { collapseGroups: true },
              ],
            }),
          ])
        )
      )
      .pipe($.gulp.dest($.gulpConfig.img.dist))
      .pipe($.browserSync.stream());
  });
};
