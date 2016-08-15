module.exports = function (gulp, plugins, config) {
	return function (done) {

		/* wrap in pre and code tags */
		var start = '<pre class="language-markup"><code class="language-markup">';
		var end = '</code></pre>';

		var stream = plugins.assemble({
			dest: 'dist',
			logErrors: config.dev,
			helpers: {
				withSort: function(array, options) {
					var new_array, result = '';
					new_array = Object.keys(array).sort(function(a, b) {
						return array[a].data.sorte > array[b].data.sorte;
					});
					new_array.map( function(item) {
						result += options.fn(array[item]);
					});
					return result;
				  },
				  example: function(args, type) {
					var string, esacped_string, template_string, template,
						start, end, lng_type = 'markup';

					if ( 'string' === typeof type ) {
						lng_type = type;
					}

					start = '<pre class="language-' + lng_type + '"><code class="language-' + lng_type + '">',
					end = '</code></pre>';

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
