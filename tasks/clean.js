module.exports = function (gulp, plugins, config) {
	return function () {
		//deletes the config.dest directory specified in gulpfile.js
		return plugins.del([config.dest]);
	};
};
