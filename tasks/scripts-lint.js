module.exports = function (gulp, plugins, config) {
	return function (done) {

		var stream = gulp.src([
				'./src/assets/fabricator/scripts/app.js',
				'./src/assets/fabricator/scripts/search.js',
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
