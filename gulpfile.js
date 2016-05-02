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

// configuration
var config = {
	dev: plugins.gutil.env.env,
	src: {
		scripts: {
			fabricator : './src/assets/fabricator/scripts/fabricator.js',
			build      : './src/assets/design-system/scripts/design-system.js',
			dev        : './design-system/dist/js/app.js'
		},
		styles: {
			fabricator : 'src/assets/fabricator/styles/fabricator.scss',
			build      : './src/assets/design-system/styles/design-system.css',
			dev        : './design-system/dist/css/style.css'
		},
		images: 'src/assets/toolkit/images/**/*',
		views: 'src/toolkit/views/*.html'
	},
	dest: 'dist'
};

// webpack
plugins.webpackConfig = require('./webpack.config')(config);
plugins.webpackCompiler = plugins.webpack(plugins.webpackConfig);

function getTask(task) {
	return require('./gulp-tasks/' + task)(gulp, plugins, config);
}

// clean
gulp.task('clean', getTask('clean'));
gulp.task('clean-designsystem', getTask('clean-designsystem'));

gulp.task('styles-fabricator', getTask('styles-fabricator'));
gulp.task('styles-designsystem', getTask('styles-designsystem'));

gulp.task('styles', [
	'styles-fabricator',
	'styles-designsystem'
]);

gulp.task('scripts', getTask('scripts'));

// assemble
gulp.task('assemble', getTask('assemble'));

gulp.task('build', ['clean-designsystem'], function() {
	gulp.start('default');
});

// server
gulp.task('serve', getTask('serve'));

// default build task
gulp.task('default', ['clean'], function () {

	// define build tasks
	var tasks = [
		'styles',
		'scripts',
		'assemble'
	];

	// run build
	plugins.runSequence(tasks, function () {
		if (config.dev) {
			//gulp.start('serve');
		}
	});

});
