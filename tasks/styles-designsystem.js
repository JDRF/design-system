module.exports = function (gulp, plugins, config) {
	return function () {
		/*
		* Bring the design system styles specified in gulpfile.js (varies depending on environment),
		* rename it to design-system.css and place it in the dist folder path.
		*/
		var stream = gulp.src(plugins.gutil.env.env === 'dev' ? config.src.styles.dev : config.src.styles.build)
			.pipe(plugins.gulpif(config.dev, gulp.dest(config.src.src + '/assets/design-system/styles')))
			.pipe(plugins.rename('design-system.css'))
			.pipe(gulp.dest(config.dest + '/assets/design-system/styles'));
		return stream;
	};
};
