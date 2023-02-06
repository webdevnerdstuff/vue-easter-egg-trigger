/* eslint-disable import/no-extraneous-dependencies */
const { merge } = require('webpack-merge');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const base = require('./webpack.base.config');

/*
 |--------------------------------------------------------------------------
 | HtmlWebpackPlugin Options
 |--------------------------------------------------------------------------
 */
const htmlWebpackOptions = {
	inject: 'body',
	template: '../src/templates/index.html',
	title: 'Vue Easter Egg Loader',
};

/*
 |--------------------------------------------------------------------------
 | Plugins
 |--------------------------------------------------------------------------
 */
const plugins = [
	new HtmlWebpackPlugin(htmlWebpackOptions),
];


module.exports = merge(base, {
	mode: 'production',
	context: path.join(__dirname, '../src'),
	entry: '../src/main.js',
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
		clean: true,
		filename: '[name].js',
		path: path.resolve(__dirname, '../docs'),
		publicPath: '/',
		library: 'vue-easter-egg-trigger',
		libraryTarget: 'umd',
	},
	plugins,
});
