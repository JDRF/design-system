module.exports = function (gulp, plugins, config) {
	return function (done) {
		var bundleStream = plugins.browserify(config.src.scripts.app).bundle()

		/*
		* Take file from the config.src.scripts.app path and rename to search.js
		* Then place it in dist/assets/fabricator/scripts
		* Minify the same file, rename it to search.min.js
		* Then place in the same directory as search.js
		*/
		bundleStream
			.pipe(plugins.source(config.src.scripts.app))
			.pipe(plugins.rename('search.js'))
			.pipe(gulp.dest(config.dest + '/assets/fabricator/scripts/'))
			.pipe(plugins.streamify(plugins.uglify()))
			.pipe(plugins.rename('search.min.js'))
			.pipe(gulp.dest(config.dest + '/assets/fabricator/scripts/'));

		var fabStream = plugins.browserify(config.src.scripts.fabricator).bundle()

		/*
		* Take file from the config.src.scripts.fabricator path and rename to f.js
		* Then place it in dist/assets/fabricator/scripts
		* Minify the same file, rename it f.min.js
		* Then place in the same directory as f.js
		*/
		fabStream
			.pipe(plugins.source(config.src.scripts.fabricator))
			.pipe(plugins.rename('f.js'))
			.pipe(gulp.dest(config.dest + '/assets/fabricator/scripts/'))
			.pipe(plugins.streamify(plugins.uglify()))
			.pipe(plugins.rename('f.min.js'))
			.pipe(gulp.dest(config.dest + '/assets/fabricator/scripts/'));

		var rippleStream = plugins.browserify(config.src.scripts.app).bundle()

		return plugins.merge(bundleStream, fabStream);


	};
};
