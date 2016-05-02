module.exports = function (gulp, plugins, paths) {
	return function () {
		var stream = gulp.src([
			'./node_modules/bootstrap/dist/js/bootstrap.js',
			__dirname + '/../src/js/**/*.js',
		])
		.pipe(plugins.concat('design-system.js'))
		.pipe(gulp.dest(__dirname + '/../dist/js'));
		return stream;
	};
};
