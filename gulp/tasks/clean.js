// очищаем папку dest
module.exports = function () {
  $.gulp.task('clean', function () {
    return $.del(['./dist/*']);
  });
};
