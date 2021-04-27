const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const base = require('./webpack.base.config');

module.exports = merge(base, {
	mode: 'production',
	target: 'node',
	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin({
				terserOptions: {
					format: {
						comments: false,
					},
				},
				extractComments: false,
			}),
		],
	},
	output: {
		filename: 'ssr.vue-easter-egg-trigger.js',
	},
});
