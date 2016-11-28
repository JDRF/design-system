var gulp       = require('gulp'),
	del        = require('del'),
	plugins    = require('gulp-load-plugins')({
		rename: {
			'gulp-scss-lint': 'scsslint',
			'gulp-clean-css': 'minifycss',
			'gulp-autoprefixer' : 'prefix',
		}
	}),
	comments = ['/**',
		' * <%= pkg.name %> - <%= pkg.description %>',
		' * @version v<%= pkg.version %>',
		' * @link <%= pkg.homepage %>',
		' * @license <%= pkg.license %>',
		' */',
		''].join('\n');

plugins.merge = require('merge-stream');
plugins.runSequence = require('run-sequence');
plugins.pkg = require('./package.json');
plugins.iife = require('gulp-iife');

function getTask(task) {
	return require('./tasks/' + task)(gulp, plugins, comments);
}

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
gulp.task('scripts', ['clean:js'], getTask('scripts'));

// Compile all sass files together
gulp.task('styles', ['clean:css'], getTask('styles'));

gulp.task('fonts', ['clean'], getTask('fonts'));

gulp.task('test', getTask('test'));

// Rerun the task when a file changes
gulp.task('watch', function() {
	gulp.watch(paths.scripts, ['scripts']);
	gulp.watch(paths.styles, ['styles']);
});

gulp.task('default', ['clean'], function () {
	plugins.runSequence([
		'fonts',
		'styles',
		'scripts',
	]);
});
