 module.exports = function (gulp, plugins, comments) {
	return function () {
		var stream = gulp.src([
			// Don't include bootstrap yet. Proof of future Concept
			'./node_modules/jquery/dist/jquery.min.js',
			'./node_modules/bootstrap/dist/js/umd/button.js',
			'./node_modules/moment/moment.js',
			'./node_modules/pikaday/pikaday.js',
			__dirname + '/../src/js/**/*.js',
		])
		// JSCS
		.pipe(plugins.jscs())
		.pipe(plugins.jscs.reporter())

		// ESLINT
		.pipe(plugins.eslint())
		.pipe(plugins.eslint.format())
		.pipe(plugins.eslint.failAfterError())

		// Replace classes with namespaced classes
		.pipe(plugins.replace('\'active\'', '\'ds-active\''))
		.pipe(plugins.replace('\'btn\'', '\'ds-btn\''))
		.pipe(plugins.replace('.active', '.ds-active'))
		.pipe(plugins.replace('.btn', '.ds-btn'))
		.pipe(plugins.replace('ds-activeElement', 'activeElement'))
		.pipe(plugins.replace('ds-active++', 'active++'))
		.pipe(plugins.replace('ds-active||', 'active||'))

		.pipe(plugins.concat('design-system.js'))
		.pipe(plugins.header(comments, {pkg : plugins.pkg}))
		.pipe(gulp.dest(__dirname + '/../dist/js'));
		return stream;
	};
};
