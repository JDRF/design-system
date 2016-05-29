module.exports = function (gulp, plugins, config) {
	return function (done) {
		/* Run fabricator scripts through JS linters */
		var stream = gulp.src([
				'./src/assets/fabricator/scripts/app.js',
				'./src/assets/fabricator/scripts/search.js',
				'./src/assets/fabricator/scripts/fabricator.js',
				'./src/assets/fabricator/scripts/helpers.js',
				'./src/assets/fabricator/scripts/ripple.js',
			])

			// JSCS
			.pipe(plugins.jscs())
			.pipe(plugins.jscs.reporter())

			// ESLINT
			.pipe(plugins.eslint())
			.pipe(plugins.eslint.format())

		return stream;
	};
};
