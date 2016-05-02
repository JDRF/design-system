'use strict';

// modules
var assemble = require('fabricator-assemble');
var browserSync = require('browser-sync');
var csso = require('gulp-csso');
var del = require('del');
var gulp = require('gulp');
var gutil = require('gulp-util');
var gulpif = require('gulp-if');
var merge = require('merge-stream');
var prefix = require('gulp-autoprefixer');
var prompt = require('gulp-prompt');
var rename = require('gulp-rename');
var reload = browserSync.reload;
var runSequence = require('run-sequence');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var webpack = require('webpack');

// configuration
var config = {
	dev: gutil.env.env,
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
var webpackConfig = require('./webpack.config')(config);
var webpackCompiler = webpack(webpackConfig);

// clean
gulp.task('clean', function () {
	return del([config.dest]);
});

gulp.task('clean:designsystem', function() {
	if (config.dev) {
		var js = gulp.src(config.src.scripts.dev)
			//.pipe(prompt.confirm('Have you commited all the changes to be included by this version?'))
			.pipe(rename('design-system.js'))
			.pipe(gulp.dest('./src/assets/design-system/scripts/'));

		var css = gulp.src(config.src.styles.dev)
			.pipe(rename('design-system.css'))
			.pipe(gulp.dest('./src/assets/design-system/styles/'));

		return merge(js, css);
	}
});

// styles
gulp.task('styles:fabricator', function () {
	gulp.src(config.src.styles.fabricator)
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(prefix('last 1 version'))
		.pipe(gulpif(!config.dev, csso()))
		.pipe(rename('f.css'))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(config.dest + '/assets/fabricator/styles'))
		.pipe(gulpif(config.dev, reload({stream:true})));
});

gulp.task('styles:toolkit', function () {
	gulp.src(config.src.styles.toolkit)
		.pipe(gulpif(config.dev, sourcemaps.init()))
		.pipe(sass().on('error', sass.logError))
		.pipe(prefix('last 1 version'))
		.pipe(gulpif(!config.dev, csso()))
		.pipe(gulpif(config.dev, sourcemaps.write()))
		.pipe(gulp.dest(config.dest + '/assets/toolkit/styles'))
		.pipe(gulpif(config.dev, reload({stream:true})));
});

gulp.task('style:designsystem', function () {
	gulp.src(gutil.env.env === 'dev' ? config.src.styles.dev : config.src.styles.build)
		.pipe(rename('design-system.css'))
		.pipe(gulp.dest(config.dest + '/assets/design-system/styles'));
});

gulp.task('styles', ['styles:fabricator', 'style:designsystem']);

// scripts
gulp.task('scripts', function (done) {
	webpackCompiler.run(function (error, result) {
		if (error) {
			gutil.log(gutil.colors.red(error));
		}
		result = result.toJson();
		if (result.errors.length) {
			result.errors.forEach(function (error) {
				gutil.log(gutil.colors.red(error));
			});
		}
		done();
	});
});

// assemble
gulp.task('assemble', function (done) {
	assemble({
		dest: 'dist',
		logErrors: config.dev,
		helpers: {
			local: function(options) {
				if ( 'dev' === gutil.env.env ) {
					return options.fn(this);
				} else {
					return options.inverse(this);
				}
			}
		}
	});
	done();
});

// server
gulp.task('serve', function () {

	browserSync({
		server: {
			baseDir: config.dest
		},
		notify: false,
		logPrefix: 'FABRICATOR'
	});

	/**
	 * Because webpackCompiler.watch() isn't being used
	 * manually remove the changed file path from the cache
	 */
	function webpackCache(e) {
		var keys = Object.keys(webpackConfig.cache);
		var key, matchedKey;
		for (var keyIndex = 0; keyIndex < keys.length; keyIndex++) {
			key = keys[keyIndex];
			if (key.indexOf(e.path) !== -1) {
				matchedKey = key;
				break;
			}
		}
		if (matchedKey) {
			delete webpackConfig.cache[matchedKey];
		}
	}

	gulp.task('assemble:watch', ['assemble'], reload);
	gulp.watch('src/**/*.{html,md,json,yml}', ['assemble:watch']);

	gulp.task('styles:fabricator:watch', ['styles:fabricator']);
	gulp.watch('src/assets/fabricator/styles/**/*.scss', ['styles:fabricator:watch']);

	gulp.task('styles:toolkit:watch', ['styles:toolkit']);
	gulp.watch('src/assets/toolkit/styles/**/*.scss', ['styles:toolkit:watch']);

	gulp.task('scripts:watch', ['scripts'], reload);
	gulp.watch('src/assets/{fabricator,toolkit}/scripts/**/*.js', ['scripts:watch']).on('change', webpackCache);

});

gulp.task('build', ['clean:designsystem'], function() {
	gulp.start('default');
});

// default build task
gulp.task('default', ['clean'], function () {

	// define build tasks
	var tasks = [
		'styles',
		'scripts',
		'assemble'
	];

	// run build
	runSequence(tasks, function () {
		if (config.dev) {
			//gulp.start('serve');
		}
	});

});
