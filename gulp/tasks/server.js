// запускаем сервер
module.exports = function () {
  $.gulp.task('server', done => {
    $.browserSync.init({
      server: $.gulpConfig.server,
      tunnel: false,
      port: 9000,
    });
    done();
  });
};
