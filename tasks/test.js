module.exports = function (gulp, plugins, config) {
	return function (done) {
		plugins.gutil.env.env = 'dev';
		plugins.gutil.env.test = 'test';
		return plugins.runSequence(['serve']);
	};
};
