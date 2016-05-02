module.exports = function (gulp, plugins, config) {
	return function () {
		return plugins.del([config.dest]);
	};
};
