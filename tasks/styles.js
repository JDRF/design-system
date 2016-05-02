module.exports = function (gulp, plugins) {
	return function () {
		var stream = gulp.src([__dirname + '/../src/scss/style.scss'])
			.pipe(plugins.sass({
				includePaths: [
					'./node_modules/bootstrap/'
				],
			}))
			.on('error', plugins.notify.onError(function (error) {
				return 'Error: ' + error.message;
			})) 
			.pipe(plugins.rename('design-system.css'))
			.pipe(gulp.dest(__dirname + '/../dist/css'));
		return stream;
	};
};
