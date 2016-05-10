module.exports = function (gulp, plugins) {
	return function () {

		// Define which tests to run
		var src = __dirname + '/../tests/**/*.js';

		if ( 'undefined' !== typeof plugins.gutil.env.test_dir ) {
			src = __dirname + '/../tests/' + plugins.gutil.env.test_dir + '/*.js';
			if ( 'undefined' !== typeof plugins.gutil.env.test_dir ) {
				src = __dirname + '/../tests/' + plugins.gutil.env.test_dir + '/' + plugins.gutil.env.test_file + '.js';
			}
		}

		var stream = gulp.src(src)
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
