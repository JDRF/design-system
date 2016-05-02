module.exports = function (gulp, plugins, paths) {
	return function () {
		var stream = gulp.src([
			paths.bootstrap.scripts,
			paths.scripts
		])
		.pipe(plugins.concat('design-system.js'))
		.pipe(gulp.dest('dist/js'));
		return stream;
	};
};
