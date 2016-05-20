module.exports = function (gulp, plugins, config) {
	return function () {

		plugins.browserSync.init({
			server: {
				//baseDir: config.dest
				baseDir: './',
				index: 'index-local.html',
			},
			notify: false,
			logPrefix: 'DESIGN-SYSTEM',
			ui: false,
			port: 3000,
			open: ('test' === plugins.gutil.env.test) ? false : 'local',
		}, function(err, bs) {
			if ('test' === plugins.gutil.env.test) {
				plugins.runSequence('test-from-dev', function() {
					plugins.browserSync.exit();
					process.exit();
				});
			}
		});

		/* Watch for changes in the following paths */
		gulp.task('assemble:watch', ['assemble'], plugins.reload);
		gulp.watch('src/**/*.{html,md,json,yml}', ['assemble:watch']);

		gulp.task('styles:fabricator:watch', ['styles-fabricator'], plugins.reload);
		gulp.watch('src/assets/fabricator/styles/**/*.scss', ['styles:fabricator:watch']);

		gulp.task('styles:designsystem:watch', ['styles-designsystem'], plugins.reload);
		gulp.watch('src/assets/design-system/styles/**/*.scss', ['styles:designsystem:watch']);

		gulp.task('scripts:watch', ['scripts'], plugins.reload);
		gulp.watch('src/assets/{fabricator,design-system}/scripts/**/*.js', ['scripts:watch']).on('change', plugins.reload);

		if ( 'dev' === plugins.gutil.env.env ) {
			/* if dev env, watch these paths for styles */
			gulp.task('styles:from-dev:watch', function(done) {
				plugins.runSequence('styles-from-dev', 'styles-designsystem', function() {
					plugins.reload();
					done();
				});
			});
			gulp.watch('design-system/src/scss/**/*.scss', ['styles:from-dev:watch']);

			/* if dev env, watch these paths for scripts */
			gulp.task('scripts:from-dev:watch', function(done) {
				plugins.runSequence('scripts-from-dev', 'scripts', function() {
					plugins.reload();
					done();
				});
			});
			gulp.watch('design-system/src/js/**/*.js', ['scripts:from-dev:watch']);
		}
	};
};
