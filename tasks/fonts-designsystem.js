module.exports = function (gulp, plugins, config) {
	return function () {
		var stream = gulp.src(config.src.fonts)
			.pipe(gulp.dest(config.dest + '/assets/design-system/fonts'));
		return stream;
	};
};

