// собираем scss
$.sass.compiler = $.nodeSASS;

module.exports = function () {
  $.gulp.task('compileSCSS', () => {
    return $.gulp
      .src($.gulpConfig.styles.src)
      .pipe($.gulpif(!$.yargs, $.sourcemaps.init()))
      .pipe($.concat('main.scss'))
      .pipe($.sassGlob())
      .pipe($.sass().on('error', $.sass.logError))
      .pipe($.px2rem({ replace: true }))
      .pipe(
        $.gulpif(
          $.yargs,
          $.autoprefixer({
            overrideBrowserslist: ['last 12 versions', '> 1%', 'ie 8', 'ie 7'],
            cascade: false,
            grid: true,
          })
        )
      )
      .pipe($.gulpif($.yargs, $.gcmq()))
      .pipe($.gulpif($.yargs, $.minCSS()))
      .pipe($.rename({ suffix: '.min' }))
      .pipe($.gulpif(!$.yargs, $.sourcemaps.write('./maps/')))
      .pipe($.gulp.dest($.gulpConfig.styles.dist))
      .pipe($.browserSync.stream());
  });
};
