module.exports = function (gulp, plugins) {
	return function () {
		var stream = gulp.src(__dirname + '/../testsuite.js')
			.pipe(plugins.phantomcss());
		return stream;
	};
};
