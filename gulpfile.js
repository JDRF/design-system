var gulp       = require('gulp'),
	del        = require('del'),
	concat     = require('gulp-concat'),
	notify     = require('gulp-notify'),
	phantomcss = require('gulp-phantomcss'),
	rename     = require('gulp-rename'),
	sass       = require('gulp-sass'),
	connect    = require('gulp-connect'),

	paths = {
		bootstrap: {
			scripts: './node_modules/bootstrap/dist/js/bootstrap.js',
			styles: './node_modules/bootstrap/scss/'
		},
		scripts: './src/js/**/*.js',
		styles: './src/sass/**/*.scss'
	};

// Clean the dist directory
gulp.task('clean', function() {
	return del(['dist', 'screenshots', 'failures']);
});

gulp.task('clean:css', function() {
	return del(['dist/css']);
});

gulp.task('clean:js', function() {
	return del(['dist/js']);
});

// Compile all scripts together
gulp.task('scripts', ['clean:js'], function() {
	return gulp.src([
		paths.bootstrap.scripts,
		paths.scripts
	])
	.pipe(gulp.dest('dist/js/src'))
	.pipe(concat('app.js'))
	.pipe(gulp.dest('dist/js'));
});

// Compile all sass files together
gulp.task('sass', ['clean:css'], function () {
	return gulp.src([
		paths.styles
	])
	.pipe(sass({
		includePaths: [
			paths.bootstrap.styles
		],
	}))
	.on('error', notify.onError(function (error) {
		return 'Error: ' + error.message;
	})) 
	.pipe(gulp.dest('dist/css'));
});

//Connect to web server with Gulp Connect
gulp.task('connect', function() {
  connect.server({
    livereload: true
  });
});

//run livereload with Gulp Connect
gulp.task('html', function () {
  gulp.src('./*.html')
    .pipe(connect.reload());
});

gulp.task('test', function (){
	gulp.src('./testsuite.js')
	.pipe(phantomcss());
});

// Rerun the task when a file changes
gulp.task('watch', function() {
	gulp.watch(paths.scripts, ['scripts']);
	gulp.watch(paths.styles, ['sass']);
	gulp.watch(['./*.html'], ['html']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['clean', 'scripts', 'sass', 'connect']);
