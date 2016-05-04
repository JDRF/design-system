var gulp       = require('gulp'),
	del        = require('del'),
	plugins    = require('gulp-load-plugins')(),
	paths      = {
		bootstrap: {
			scripts: './node_modules/bootstrap/dist/js/bootstrap.js',
			styles: './node_modules/bootstrap/'
		},
		scripts: './src/js/**/*.js',
		styles: './src/scss/style.scss'
	},
	cssImporter = require('node-sass'),
    	CssImporter = require('node-sass-css-importer')({
      		import_paths: ['./node_modules/material-icons/']
    });

plugins.merge = require('merge-stream');

function getTask(task) {
	return require('./tasks/' + task)(gulp, plugins, paths, cssImporter);
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

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['clean', 'scripts', 'styles', 'fonts']);
