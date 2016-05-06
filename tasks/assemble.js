module.exports = function (gulp, plugins, config) {
	return function (done) {
		var stream = plugins.assemble({
			dest: 'dist',
			logErrors: config.dev,
			helpers: {
				example: function(args) {
					var string, esacped_string, template;

					string = args.replace( '.', '/' );
					escaped = plugins.escape( plugins.fs.readFileSync(__dirname + '/../src/html/' + string + '.html', 'utf8') );
					template = plugins.hbs.compile( escaped );
					return new plugins.hbs.SafeString(template(args));
				}
			}
		});
		done();
	};
};
