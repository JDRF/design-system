module.exports = function (gulp, plugins, paths) {
	return function () {
		var stream = gulp.src([
			// Don't include bootstrap yet. Proof of future Concept
			//'./node_modules/bootstrap/dist/js/bootstrap.js',
			__dirname + '/../src/js/**/*.js',
		])
		.pipe(plugins.jscs())
		.pipe(plugins.jscs.reporter())
		.pipe(plugins.concat('design-system.js'))
		.pipe(gulp.dest(__dirname + '/../dist/js'));
		return stream;
	};
};
