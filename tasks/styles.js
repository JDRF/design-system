module.exports = function (gulp, plugins) {

	return function () {
		//the sass source files directory (Bootstrap overwrites)
		var sassStream = gulp.src([
			__dirname + '/../src/scss/style.scss'
			])
			//SCSS LINT
			.pipe(plugins.scsslint({
		    	'config': './.scss-lint.yml'
		    }))
		    //include bootstrap so we can use @import in sass
			.pipe(plugins.sass({
				includePaths: [
					'./node_modules/bootstrap/'
					],
			}))
			.on('error', plugins.notify.onError(function (error) {
				return 'Error: ' + error.message;
			})) 
			/*
			* After scss lint and including bootstrap path,
			* concat to plain css in a file called sass-files.css
			*/
			.pipe(plugins.concat('sass-files.css'));

		//grab the material icons stylesheet and concat into css-files.css
		var cssStream = gulp.src('./node_modules/material-icons/css/material-icons.css')
			.pipe(plugins.concat('css-files.css'));

		//merge sass-files.css and css-files.css into design-system.css in the dist dir
		var stream = plugins.merge(sassStream, cssStream)
			.pipe(plugins.concat('design-system.css'))
			.pipe(gulp.dest(__dirname + '/../dist/css'));

		//use design-system.css to create a minified version in the dist dir
		var minifyStream = gulp.src([
			__dirname + '/../dist/design-system.css'
			])
			.pipe(plugins.minifycss())
			.pipe(gulp.dest(__dirname + '/../dist/css'));

		return minifyStream;
	};

};
