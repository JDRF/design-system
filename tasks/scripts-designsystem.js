module.exports = function (gulp, plugins, config) {
	return function () {
		/*
		* Take file from the config.src.scripts.dev path or config.src.scripts.build path
		* If env is the dev env, take files from src/assets/design-system/scripts
		* Rename the files to design-system.js and place in dist directory
		*/
		var stream = gulp.src(plugins.gutil.env.env === 'dev' ? config.src.scripts.dev : config.src.scripts.build)
			.pipe(plugins.gulpif(config.dev, gulp.dest(config.src.src + '/assets/design-system/scripts')))
			.pipe(plugins.rename('design-system.js'))
			.pipe(gulp.dest(config.dest + '/assets/design-system/scripts'));
		return stream;
	};
};
