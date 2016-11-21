module.exports = function (gulp, plugins, comments) {

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
			.pipe(plugins.cssNamespace({
				namespace: 'ds',
				exclude: [
					'material-icons'
				]
			}))
			.pipe(plugins.prefix({
				browsers: ['last 2 versions', 'ie 9']
			}))
			/*
			 * After scss lint and including bootstrap path,
			 * rename to plain css in a file called sass-files.css
			 */
			.pipe(plugins.rename('sass-files.css'));

		// Grab vendor stylesheets and rename to css-files.css
		var cssStream = gulp.src([
				'./node_modules/material-icons/css/material-icons.css',
				'./node_modules/pikaday/css/pikaday.css'
			])
			.pipe(plugins.rename('css-files.css'));

		// Vendor overrides
		var vendorStream = gulp.src([
			__dirname + '/../src/scss/vendor.scss'
			])
			.on('error', plugins.notify.onError(function (error) {
				return 'Error: ' + error.message;
			})) 
			.pipe(plugins.prefix({
				browsers: ['last 2 versions', 'ie 9']
			}))
			/*
			 * After scss lint and including bootstrap path,
			 * rename to plain css in a file called sass-files.css
			 */
			.pipe(plugins.rename('vendor-files.css'));

		// Merge sass-files.css and css-files.css into design-system.css in the dist dir
		var stream = plugins.merge(sassStream, cssStream, vendorStream)
			.pipe(plugins.concat('design-system.css'))
			.pipe(plugins.header(comments, {pkg : plugins.pkg}))
			.pipe(gulp.dest(__dirname + '/../dist/css'))
			.pipe(plugins.minifycss())
			.pipe(plugins.header(comments, {pkg : plugins.pkg}))
			.pipe(plugins.rename('design-system.min.css'))
			.pipe(gulp.dest(__dirname + '/../dist/css'));

		return stream;
	};

};
