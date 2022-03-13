global.$ = {
  gulp: require('gulp'),
  browserSync: require('browser-sync').create(),
  sass: require('gulp-sass')(require('sass')),
  nodeSASS: require('node-sass'),
  sassGlob: require('gulp-sass-glob'),
  sourcemaps: require('gulp-sourcemaps'),
  minCSS: require('gulp-clean-css'),
  concat: require('gulp-concat'),
  rename: require('gulp-rename'),
  autoprefixer: require('gulp-autoprefixer'),
  gcmq: require('gulp-group-css-media-queries'),
  px2rem: require('gulp-px2rem'),
  pug: require('gulp-pug'),
  del: require('del'),
  babel: require('gulp-babel'),
  webpack: require('webpack'),
  webpackStream: require('webpack-stream'),
  uglify: require('gulp-uglify'),
  newer: require('gulp-newer'),
  imagemin: require('gulp-imagemin'),
  gulpif: require('gulp-if'),
  stylelint: require('gulp-stylelint'),
  yargs: require('yargs').argv._[0] == 'build' || require('yargs').argv._[0] == 'build-watch',
  path: {
    tasks: require('./gulp/config.js'),
  },
  gulpConfig: {
    views: {
      src: ['./src/views/index.pug', './src/views/pages/*.pug'],
      dist: './dist/',
      watch: ['./src/blocks/**/*.pug', './src/views/**/*.pug'],
    },
    styles: {
      src: './src/styles/main.{scss,sass}',
      dist: './dist/styles/',
      watch: ['./src/blocks/**/*.{scss,sass}', './src/styles/**/*.{scss,sass}'],
    },
    js: {
      src: './src/js/main.js',
      dist: './dist/js/',
      watch: ['./src/blocks/**/*.js', './src/js/**/*.js'],
    },
    img: {
      src: ['./src/img/**/*.{jpg,jpeg,png,gif,tiff,svg}', '!./src/img/favicon/*.{jpg,jpeg,png,gif,tiff}'],
      dist: './dist/img/',
      watch: './src/img/**/*.{jpg,jpeg,png,gif,svg}',
    },
    fonts: {
      src: './src/fonts/**/*.{woff,woff2}',
      dist: './dist/fonts/',
      watch: './src/fonts/**/*.{woff,woff2}',
    },
    stylelint: {
      src: ['./src/styles/main.{scss,sass}', './src/blocks/**/*.{scss,sass}'],
    },
    server: './dist',
  },
};

$.path.tasks.forEach(function (taskPath) {
  require(taskPath)();
});

$.gulp.task(
  'default',
  $.gulp.series(
    'clean',
    $.gulp.parallel('compilePUG', 'compileSCSS', 'stylelint', 'compileJS', 'compileIMG', 'fonts'),
    $.gulp.parallel('watch', 'server')
  )
);

// prodaction
$.gulp.task(
  'build',
  $.gulp.series('clean', $.gulp.parallel('compilePUG', 'compileSCSS', 'stylelint', 'compileJS', 'compileIMG', 'fonts'))
);

$.gulp.task(
  'build-watch',
  $.gulp.series(
    'clean',
    $.gulp.parallel('compilePUG', 'compileSCSS', 'stylelint', 'compileJS', 'compileIMG', 'fonts'),
    'watch'
  )
);
