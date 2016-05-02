module.exports = function (gulp, plugins, config) {
	return function () {
		var stream = gulp.src(plugins.gutil.env.env === 'dev' ? config.src.styles.dev : config.src.styles.build)
			.pipe(plugins.rename('design-system.css'))
			.pipe(gulp.dest(config.dest + '/assets/design-system/styles'));
		return stream;
	};
};
