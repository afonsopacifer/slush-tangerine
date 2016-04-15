// Modules :)
// ===========================================
var gulp     = require('gulp'),
    jade     = require('gulp-jade'),
    data     = require('gulp-data'),
    cssnext  = require('gulp-cssnext'),
    babel    = require('gulp-babel'),
    jshint   = require('gulp-jshint'),
    imagemin = require('gulp-imagemin'),
    connect  = require('gulp-connect'),
    ghPages  = require('gulp-gh-pages');

// Compile Jade
// ===========================================
gulp.task('jade', () => {
	gulp.src('src/**.jade')
		  .pipe(data(file => require('./config.json')))
    	.pipe(jade())
    	.pipe(gulp.dest('out'))
    	.pipe(connect.reload());
});

// cssnext features
// ===========================================
gulp.task('cssnext', () => {
  gulp.src('src/assets/styles/style.css')
    .pipe(cssnext({
      compress: false
    }))
    .pipe(gulp.dest('out/assets/styles/'))
    .pipe(connect.reload());
});

// Babel
// ===========================================
gulp.task('babel', () => {
  gulp.src('src/assets/scripts/**.js')
    .pipe(babel({
      presets: ['es2015']
     }))
    .pipe(gulp.dest('out/assets/scripts/'))
    .pipe(connect.reload());
});

// JSHint
// ===========================================
gulp.task('hint', () => {
  return gulp.src('src/assets/scripts/**.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(connect.reload());
});

// Imagemin
// ===========================================
gulp.task('imagemin', () => {
  gulp.src('src/assets/img/**/**')
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}]
    }))
    .pipe(gulp.dest('out/assets/img/'))
    .pipe(connect.reload());
});

// Watch
// ===========================================
gulp.task('watch', () => {
	gulp.watch(['src/**/**.jade'], ['jade']);
	gulp.watch(['src/assets/styles/**/**.css'], ['cssnext']);
  gulp.watch(['src/assets/scripts/**.js'], ['babel']);
  gulp.watch(['src/assets/img/**/**'], ['imagemin']);
  gulp.watch(['src/assets/scripts/**.js'], ['hint']);
});

// Static server
// ===========================================
gulp.task('connect', () => {
	connect.server({
		root: 'out',
		livereload: true
	});
});

// Deploy for gh-pages
// ===========================================
gulp.task('deploy', () => {
  return gulp.src('./out/')
    .pipe(ghPages());
});

// More Tasks
// ===========================================
gulp.task('serve', ['connect', 'watch']);
gulp.task('build', ['jade', 'cssnext', 'babel', 'hint', 'imagemin']);
gulp.task('validate', ['hint']);
