module.exports = function (gulp, plugins, config) {
	return function () {
		/*
		* Bring the fonts specified in the config.src.fonts path from gulpfile.js
		* into the dist folder for use
		*/
		var stream = gulp.src(config.src.fonts)
			.pipe(gulp.dest(config.dest + '/assets/design-system/fonts'));
		return stream;
	};
};

