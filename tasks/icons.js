module.exports = function (gulp, plugins, config) {
	return function () {
		var stream = gulp.src([
			'./node_modules/material-icons/css/material-icons.min.css'
			])
			.pipe(gulp.dest(__dirname + '/../dist/css'));
		return stream;
	};
};
