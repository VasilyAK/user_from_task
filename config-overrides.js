const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function override(config, env) {
	if (!config.plugins) {
		config.plugins = [];
	}

	config.plugins.push(
		(process.env.NODE_ENV === 'production') ?
			new CopyWebpackPlugin([{context: './src/', from: 'subscriber/*.json'}]) :
			new CopyWebpackPlugin([{context: './src/', from: 'subscriber/*.json', to: './build'}])
	);

	return config;
};