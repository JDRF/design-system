module.exports = function (gulp, plugins, config) {
	return function (done) {
		var bundleStream = plugins.browserify(config.src.scripts.app).bundle()

		bundleStream
			.pipe(plugins.source(config.src.scripts.app))
			.pipe(plugins.rename('search.js'))
			.pipe(gulp.dest(config.dest + '/assets/fabricator/scripts/'))
			.pipe(plugins.streamify(plugins.uglify()))
			.pipe(plugins.rename('search.min.js'))
			.pipe(gulp.dest(config.dest + '/assets/fabricator/scripts/'));

		var fabStream = plugins.browserify(config.src.scripts.fabricator).bundle()

		fabStream
			.pipe(plugins.source(config.src.scripts.fabricator))
			.pipe(plugins.rename('f.js'))
			.pipe(gulp.dest(config.dest + '/assets/fabricator/scripts/'))
			.pipe(plugins.streamify(plugins.uglify()))
			.pipe(plugins.rename('f.min.js'))
			.pipe(gulp.dest(config.dest + '/assets/fabricator/scripts/'));

		return plugins.merge(bundleStream, fabStream);


	};
};
