module.exports = function (gulp, plugins, paths) {
	return function () {
		var stream = gulp.src([
			paths.bootstrap.scripts,
			paths.scripts
		])
		.pipe(gulp.dest('dist/js/src'))
		.pipe(plugins.concat('app.js'))
		.pipe(gulp.dest('dist/js'));
		return stream;
	};
};
