module.exports = function (gulp, plugins, config) {
	return function (done) {
		var stream = plugins.webpackCompiler.run(function (error, result) {
			if (error) {
				plugins.gutil.log(plugins.gutil.colors.red(error));
			}
			result = result.toJson();
			if (result.errors.length) {
				result.errors.forEach(function (error) {
					plugins.gutil.log(plugins.gutil.colors.red(error));
				});
			}
			done();
		});
		return stream;
	};
};
