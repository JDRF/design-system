'use strict';

// modules
var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({
	rename: {
		'gulp-util'         : 'gutil',
		'gulp-autoprefixer' : 'prefix',
		'gulp-if'           : 'gulpif',
		'gulp-scss-lint'    : 'scsslint',
		'gulp-clean-css'    : 'minifycss'
	}
});

plugins.assemble = require('fabricator-assemble');
plugins.browserify = require('browserify');
plugins.browserSync = require('browser-sync').create();
plugins.del = require('del');
plugins.escape = require('html-escape');
plugins.fs = require('fs');
plugins.hbs = require('handlebars');
plugins.merge = require('merge-stream');
plugins.reload = plugins.browserSync.reload;
plugins.runSequence = require('run-sequence');
plugins.source = require('vinyl-source-stream');

// configuration
var config = {
	dev: plugins.gutil.env.env,
	src: {
		src: 'src',
		scripts: {
			fabricator : './src/assets/fabricator/scripts/fabricator.js',
			app        : './src/assets/fabricator/scripts/app.js',
			build      : './src/assets/design-system/scripts/design-system.js',
			dev        : './design-system/dist/js/design-system.js'
		},
		styles: {
			fabricator : './src/assets/fabricator/styles/fabricator.scss',
			build      : './src/assets/design-system/styles/design-system.css',
			dev        : './design-system/dist/css/design-system.css'
		},
		fonts: './src/assets/design-system/fonts/**/**/*'
	},
	dest: 'dist',
};

function getTask(task) {
	return require('./tasks/' + task)(gulp, plugins, config);
}

// clean
gulp.task('clean', getTask('clean'));
gulp.task('clean-designsystem', getTask('clean-designsystem'));

// styles
gulp.task('styles-fabricator', getTask('styles-fabricator'));
gulp.task('styles-designsystem', getTask('styles-designsystem'));
gulp.task('styles-from-dev', require('./design-system/tasks/styles')(gulp, plugins));

gulp.task('styles', [
	'styles-fabricator',
	'styles-designsystem'
]);

// fonts
gulp.task('fonts', getTask('fonts-designsystem'));

// scripts
gulp.task('scripts-lint', getTask('scripts-lint'));
gulp.task('scripts-fabricator', getTask('scripts-fabricator'));
gulp.task('scripts-designsystem', getTask('scripts-designsystem'));
gulp.task('scripts-from-dev', require('./design-system/tasks/scripts')(gulp, plugins));

gulp.task('scripts', ['scripts-lint'], function() {
	// run build
	return plugins.runSequence([
		'scripts-fabricator',
		'scripts-designsystem'
	]);
});

// server
gulp.task('serve', getTask('serve'));

// test
gulp.task('test', getTask('test'));
gulp.task('test-from-dev', require('./design-system/tasks/test')(gulp, plugins));

// assemble
gulp.task('assemble', getTask('assemble'));

gulp.task('build', ['clean-designsystem'], function() {
	gulp.start('default');
});

// default build task
gulp.task('default', ['clean'], function () {

	// define build tasks
	var tasks = [
		'fonts',
		'styles',
		'scripts',
		'assemble'
	];

	// run build
	plugins.runSequence(tasks);

});
