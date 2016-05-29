module.exports = function (gulp, plugins, config) {
	return function (done) {

		/* wrap in pre and code tags */
		var start = '<pre class="language-markup"><code class="language-markup">';
		var end = '</code></pre>';

		var stream = plugins.assemble({
			dest: 'dist',
			logErrors: config.dev,
			helpers: {
				example: function(args) {
					var string, esacped_string, template_string, template;

					string = args.replace( '.', '/' );
					escaped = plugins.escape( plugins.fs.readFileSync(__dirname + '/../src/html/' + string + '.html', 'utf8') );
					template_string = start + escaped + end;
					template = plugins.hbs.compile( template_string );
					return new plugins.hbs.SafeString(template(args));
				},
				escape: function(args) {
					var escaped = plugins.escape(args);
					var template_string = start + escaped + end;
					var template = plugins.hbs.compile( template_string );
					return new plugins.hbs.SafeString(template(args));
				},
				if_not_eq: function(a, b, opts) {
					if(a === b) {
						return opts.inverse(this);
					} else {
						return opts.fn(this);
					}
				}
			}
		});
		done();
	};
};
