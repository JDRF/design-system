module.exports = function (gulp, plugins, config) {
	return function () {
		var stream = gulp.src(__dirname + '/../src/fonts/**/**/*')
			.pipe(gulp.dest(__dirname + '/../dist/fonts'));
		return stream;
	};
};
