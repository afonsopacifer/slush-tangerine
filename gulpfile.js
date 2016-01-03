// Modules :)
// ===========================================
var gulp    = require('gulp'),
    jade    = require('gulp-jade'),
    data    = require('gulp-data'),
    cssnext = require("gulp-cssnext"),
    babel   = require("gulp-babel"),
    connect = require('gulp-connect');

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
gulp.task("cssnext", () => {
  gulp.src("src/assets/styles/style.css")
    .pipe(cssnext({
      compress: false
    }))
    .pipe(gulp.dest("out/assets/styles/"))
    .pipe(connect.reload());
});

// Babel
// ===========================================
gulp.task("babel", () => {
    gulp.src("src/assets/scripts/**.js")
      .pipe(babel({
        presets: ['es2015']
       }))
      .pipe(gulp.dest("out/assets/scripts/"))
      .pipe(connect.reload());
});

// Watch
// ===========================================
gulp.task('watch', () => {
	gulp.watch(['src/**/**.jade'], ['jade']);
	gulp.watch(['src/assets/styles/**/**.css'], ['cssnext']);
  gulp.watch(['src/assets/scripts/**.js'], ['babel']);
});

// Static server
// ===========================================
gulp.task('connect', () => {
	connect.server({
		root: 'out',
		livereload: true
	});
});

// More Tasks
// ===========================================
gulp.task('serve', ['connect', 'watch']);
