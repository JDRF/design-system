module.exports = function (gulp, plugins, config) {
	return function (done) {
		var stream = plugins.assemble({
			dest: 'dist',
			logErrors: config.dev,
			helpers: {
				local: function(options) {
					if ( 'dev' === plugins.gutil.env.env ) {
						return options.fn(this);
					} else {
						return options.inverse(this);
					}
				}
			}
		});
		done();
	};
};
