var gulp    = require('gulp'),
    jade    = require('gulp-jade'),
    data    = require('gulp-data'),
    connect = require('gulp-connect');

gulp.task('jade', function(){
	gulp.src('src/**.jade')
		.pipe(data(function(file) {
      		return require('./config.json');
    	}))
    	.pipe(jade())
    	.pipe(gulp.dest('out'))
    	.pipe(connect.reload());
});

gulp.task('watch', function () {
	gulp.watch(['src/**/**.jade'], ['jade']);
});

gulp.task('connect', function() {
	connect.server({
		root: 'out',
		livereload: true
	});
});

gulp.task('serve', ['connect', 'watch']);