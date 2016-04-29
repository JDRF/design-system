var path = require('path');
var webpack = require('webpack');

module.exports = function(fabricatorConfig) {

	"use strict";

	var config = {
		entry: {
			'fabricator/scripts/f': fabricatorConfig.src.scripts.fabricator,
			'design-system/scripts/design-system': fabricatorConfig.src.scripts.bootstrap
		},
		output: {
			path: path.resolve(__dirname, fabricatorConfig.dest, 'assets'),
			filename: '[name].js'
		},
		module: {
			loaders: [
				{
					test: /\.js$/,
					exclude: /(node_modules|prism\.js)/,
					loaders: ['babel-loader']
				}
			]
		},
		plugins: [],
		cache: {}
	};

	if ('dev' === fabricatorConfig.dev) {
		config.entry['design-system/scripts/design-system'] = fabricatorConfig.src.scripts.dev
	} else {
		config.plugins.push(
			new webpack.optimize.UglifyJsPlugin()
		);
	}

	return config;

};
