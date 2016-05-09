module.exports = function (gulp, plugins) {

	return function () {
		var sassStream = gulp.src([__dirname + '/../src/scss/style.scss'])
		.pipe(plugins.sass({
			includePaths: [
				'./node_modules/bootstrap/'
			],
		}))
		.on('error', plugins.notify.onError(function (error) {
			return 'Error: ' + error.message;
		})) 
		.pipe(plugins.concat('design-system.css'))
		.pipe(gulp.dest(__dirname + '/../dist/css'));

		return sassStream;
	}


	// var cssStream = gulp.src('./node_modules/material-icons/css/material-icons.css')
	// 	.pipe(plugins.concat('css-files.css'));

	// return function () {
	// 	var stream = plugins.merge(sassStream, cssStream)
	// 		.pipe(plugins.concat('design-system.css'))
	// 		.pipe(gulp.dest(__dirname + '/../dist/css'));
	// 	return stream;
	// };

};
