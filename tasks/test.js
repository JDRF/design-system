<<<<<<< HEAD
module.exports = function (gulp, plugins, config) {
	return function (done) {
		plugins.gutil.env.env = 'dev';
		plugins.gutil.env.test = 'test';
		return plugins.runSequence(['serve']);
=======
module.exports = function (gulp, plugins) {
	return function () {

		// Define which tests to run
		var src = __dirname + '/../tests/acceptance/**/*.js',
			exclude = '!' + __dirname + '/../tests/acceptance/forms/*.js';

		if ( 'undefined' !== typeof plugins.gutil.env.test_dir ) {
			src = __dirname + '/../tests/acceptance/' + plugins.gutil.env.test_dir + '/*.js';
			if ( 'undefined' !== typeof plugins.gutil.env.test_dir ) {
				src = __dirname + '/../tests/acceptance/' + plugins.gutil.env.test_dir + '/' + plugins.gutil.env.test_file + '.js';
			}
		}

		var stream = gulp.src([ src, exclude ])
			.pipe(plugins.phantomcss({
				// gulp-phantomcss overrides the default option value.
				// PR submitted.
				screenshots: __dirname + '/../screenshots',
				comparisonResultRoot: __dirname + '/../results',
				failedComparisonsRoot: __dirname + '/../failures',
			}));
		return stream;
>>>>>>> JDRF/master
	};
};
