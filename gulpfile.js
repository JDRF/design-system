'use strict';

// modules
var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({
	rename: {
		'gulp-util'         : 'gutil',
		'gulp-autoprefixer' : 'prefix',
		'gulp-if'           : 'gulpif',
	}
});

plugins.assemble = require('fabricator-assemble');
plugins.browserSync = require('browser-sync');
plugins.del = require('del');
plugins.merge = require('merge-stream');
plugins.reload = plugins.browserSync.reload;
plugins.runSequence = require('run-sequence');
plugins.webpack = require('webpack');
plugins.hbs = require('handlebars');
plugins.fs = require('fs');
plugins.escape = require('html-escape');

// configuration
var config = {
	dev: plugins.gutil.env.env,
	src: {
		scripts: {
			fabricator : './src/assets/fabricator/scripts/fabricator.js',
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
	dest: 'dist'
};

// webpack
plugins.webpackConfig = require('./webpack.config')(config);
plugins.webpackCompiler = plugins.webpack(plugins.webpackConfig);

function getTask(task) {
	return require('./tasks/' + task)(gulp, plugins, config);
}

// clean
gulp.task('clean', getTask('clean'));
gulp.task('clean-designsystem', getTask('clean-designsystem'));

gulp.task('styles-fabricator', getTask('styles-fabricator'));
gulp.task('styles-designsystem', getTask('styles-designsystem'));
gulp.task('styles-from-dev', require('./design-system/tasks/styles')(gulp, plugins));

gulp.task('styles', [
	'styles-fabricator',
	'styles-designsystem'
]);

gulp.task('fonts', getTask('fonts-designsystem'));

gulp.task('scripts', getTask('scripts'));
gulp.task('scripts-from-dev', require('./design-system/tasks/scripts')(gulp, plugins));

// assemble
gulp.task('assemble', getTask('assemble'));

gulp.task('build', ['clean-designsystem'], function() {
	gulp.start('default');
});

// server
gulp.task('serve', getTask('serve'));

// test
gulp.task('test-from-dev', require('./design-system/tasks/test')(gulp, plugins));

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
