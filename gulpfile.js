var gulp = require('gulp'),
	concat = require('gulp-concat'),
	rename = require('gulp-rename'),
	sass = require('gulp-sass'),
	notify = require('gulp-notify'),
	del = require('del'),

	paths = {
		bootstrap: {
			scripts: './node_modules/bootstrap/dist/js/bootstrap.js',
			styles: './node_modules/bootstrap/scss/'
		},
		scripts: './src/js/**/*.js',
		styles: './src/sass/**/*.scss'
	};

// Clean the build directory
gulp.task('clean', function() {
	return del(['build']);
});

gulp.task('clean:css', function() {
	return del(['build/css']);
});

gulp.task('clean:js', function() {
	return del(['build/js']);
});

// Compile all scripts together
gulp.task('scripts', ['clean:js'], function() {
	return gulp.src([
		paths.bootstrap.scripts,
		paths.scripts
	])
	.pipe(gulp.dest('build/js/src'))
	.pipe(concat('app.js'))
	.pipe(gulp.dest('build/js'));
});

// Compile all sass files together
gulp.task('sass', ['clean:css'], function () {
	return gulp.src([paths.styles])
	.pipe(sass({
		includePaths: [
			paths.bootstrap.styles
		],
	}))
	.on('error', notify.onError(function (error) {
		return 'Error: ' + error.message;
	})) 
	.pipe(gulp.dest('./build'));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
	gulp.watch(paths.scripts, ['scripts']);
	gulp.watch(paths.styles, ['sass']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['clean', 'scripts', 'sass']);
