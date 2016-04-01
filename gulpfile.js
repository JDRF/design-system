var gulp = require('gulp'),
	rename = require("gulp-rename"),
	sass = require('gulp-sass'),
	notify = require("gulp-notify"),
	del = require('del');

var paths = {
	bootstrap: {
		styles: './node_modules/bootstrap/scss/'
	},
	scripts: ['./src/js/**/*.js'],
	styles: ['./src/sass/**/*.scss']
};

// Not all tasks need to use streams
// A gulpfile is just another node program and you can use any package available on npm
gulp.task('clean', function() {
	// You can use multiple globbing patterns as you would with `gulp.src`
	return del(['build']);
});

gulp.task('scripts', ['clean'], function() {
	// Minify and copy all JavaScript (except vendor scripts)
	// with sourcemaps all the way down
	return gulp.src(paths.scripts)
	.pipe(gulp.dest('build/js'));
});

gulp.task('sass', ['clean'], function () {
	return gulp.src(paths.styles)
	.pipe(sass({
		includePaths: [
			paths.bootstrap.styles
		],
	}))
	.on("error", notify.onError(function (error) {
		return "Error: " + error.message;
	})) 
	.pipe(gulp.dest('./build'));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
	gulp.watch(paths.scripts, ['scripts']);
	gulp.watch(paths.styles, ['sass']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['scripts', 'sass']);
