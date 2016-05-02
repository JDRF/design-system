module.exports = function (gulp, plugins, config) {
	return function () {
		if (config.dev) {
			var js = gulp.src(config.src.scripts.dev)
				.pipe(plugins.rename('design-system.js'))
				.pipe(gulp.dest('./src/assets/design-system/scripts/'));

			var css = gulp.src(config.src.styles.dev)
				.pipe(plugins.rename('design-system.css'))
				.pipe(gulp.dest('./src/assets/design-system/styles/'));

			return plugins.merge(js, css);
		}
	};
};
