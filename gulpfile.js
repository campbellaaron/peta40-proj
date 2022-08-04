var gulp          = require('gulp');
var $             = require('gulp-load-plugins')();
var autoprefixer  = require('autoprefixer');
const sass = require('gulp-sass')(require('sass'));

var sassPaths = [
  'node_modules/foundation-sites/scss',
  'node_modules/motion-ui/src'
];

function styles() {
  return gulp.src('scss/app.scss')
    .pipe(sass({
      includePaths: sassPaths,
      outputStyle: 'compressed' // if css compressed **file size**
    })
      .on('error', sass.logError))
    .pipe($.postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest('css'))
};



gulp.task('sass', styles);
gulp.task('default', gulp.series('sass'));