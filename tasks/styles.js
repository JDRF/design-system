module.exports = function (gulp, plugins, paths) {
	return function () {
		var stream = gulp.src([paths.styles])
			.pipe(plugins.sass({
				includePaths: [
					paths.bootstrap.styles
				],
			}))
			.on('error', plugins.notify.onError(function (error) {
				return 'Error: ' + error.message;
			})) 
			.pipe(gulp.dest('./dist/css'));
		return stream;
	};
};
