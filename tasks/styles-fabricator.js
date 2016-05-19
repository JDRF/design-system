module.exports = function (gulp, plugins, config) {
	return function () {
		/*
		* Bring the fabricator styles specified in the config.src.styles.fabricator path
		* from gulpfile.js, rename it to f.css and place it in the dist folder path.
		*/
		var stream = gulp.src(config.src.styles.fabricator)
			.pipe(plugins.sourcemaps.init())
			.pipe(plugins.sass().on('error', plugins.sass.logError))
			.pipe(plugins.prefix('last 1 version'))
			.pipe(plugins.gulpif(!config.dev, plugins.csso()))
			.pipe(plugins.rename('f.css'))
			.pipe(plugins.sourcemaps.write())
			.pipe(gulp.dest(config.dest + '/assets/fabricator/styles'))
			.pipe(plugins.gulpif(config.dev, plugins.reload({stream:true})));
		return stream;
	};
};
