module.exports = function (gulp, plugins, config) {
	return function () {

		plugins.browserSync({
			server: {
				baseDir: config.dest
			},
			notify: false,
			logPrefix: 'FABRICATOR'
		});

		/**
		 * Because webpackCompiler.watch() isn't being used
		 * manually remove the changed file path from the cache
		 */
		function webpackCache(e) {
			var keys = Object.keys(plugins.webpackConfig.cache);
			var key, matchedKey;
			for (var keyIndex = 0; keyIndex < keys.length; keyIndex++) {
				key = keys[keyIndex];
				if (key.indexOf(e.path) !== -1) {
					matchedKey = key;
					break;
				}
			}
			if (matchedKey) {
				delete plugins.webpackConfig.cache[matchedKey];
			}
		}

		gulp.task('assemble:watch', ['assemble'], plugins.reload);
		gulp.watch('src/**/*.{html,md,json,yml}', ['assemble:watch']);

		gulp.task('styles:fabricator:watch', ['styles-fabricator']);
		gulp.watch('src/assets/fabricator/styles/**/*.scss', ['styles:fabricator:watch']);

		gulp.task('styles:designsystem:watch', ['styles-designsystem']);
		gulp.watch('src/assets/design-system/styles/**/*.scss', ['styles:designsystem:watch']);

		gulp.task('scripts:watch', ['scripts'], plugins.reload);
		gulp.watch('src/assets/{fabricator,design-system}/scripts/**/*.js', ['scripts:watch']).on('change', webpackCache);

	};
};
