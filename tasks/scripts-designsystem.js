module.exports = function (gulp, plugins, config) {
	return function () {
		var stream = gulp.src(plugins.gutil.env.env === 'dev' ? config.src.scripts.dev : config.src.scripts.build)
			.pipe(plugins.gulpif(config.dev, gulp.dest(config.src.src + '/assets/design-system/scripts')))
			.pipe(plugins.rename('design-system.js'))
			.pipe(gulp.dest(config.dest + '/assets/design-system/scripts'));
		return stream;
	};
};
