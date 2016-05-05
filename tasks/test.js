module.exports = function (gulp, plugins) {
	return function () {
		var stream = gulp.src(__dirname + '/../tests/**/*.js')
			.pipe(plugins.phantomcss({
				// gulp-phantomcss overrides the default option value.
				// PR submitted.
				screenshots: __dirname + '/../screenshots',
				comparisonResultRoot: __dirname + '/../results',
				failedComparisonsRoot: __dirname + '/../failures',
			}));
		return stream;
	};
};
