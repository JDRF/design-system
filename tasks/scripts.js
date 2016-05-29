 module.exports = function (gulp, plugins, paths) {
	return function () {
		var stream = gulp.src([
			// Don't include bootstrap yet. Proof of future Concept
			//'./node_modules/bootstrap/dist/js/bootstrap.js',
			'./node_modules/jquery/dist/jquery.min.js',
			//adding ripple js
			__dirname + '/../src/js/ripple.js',
			__dirname + '/../src/js/**/*.js',
		])
		// JSCS
		.pipe(plugins.jscs())
		.pipe(plugins.jscs.reporter())

		// ESLINT
		.pipe(plugins.eslint())
		.pipe(plugins.eslint.format())
		.pipe(plugins.eslint.failAfterError())

		.pipe(plugins.concat('design-system.js'))
		.pipe(gulp.dest(__dirname + '/../dist/js'));
		return stream;
	};
};
