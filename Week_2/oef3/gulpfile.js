var gulp = require('gulp'),
    csslint = require('gulp-csslint'),
    livereload = require('gulp-livereload');

gulp.task('css', function() {
	gulp.src('style/screen.css')
	.pipe(csslint())
	.pipe(csslint.formatter());

	livereload.reload();
});

gulp.task('default', function() {
	gulp.watch( 'style/screen.css', ['css']);

	livereload.listen();
});