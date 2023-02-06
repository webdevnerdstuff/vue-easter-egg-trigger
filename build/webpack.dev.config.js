const { merge } = require('webpack-merge');
const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const base = require('./webpack.base.config');

const devServerPort = 8080;

/*
 |--------------------------------------------------------------------------
 | Eslint Options
 |--------------------------------------------------------------------------
 */
const eslintOptions = {
	extensions: ['js', 'vue'],
	exclude: [
		'./node_modules/**/*',
		'./vendor/**/*',
		'./assets/**/*',
	],
	emitWarning: true,
	fix: true,
};

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
 | BrowserSyncPlugin Options
 |--------------------------------------------------------------------------
 */
const browserSyncOptions = {
	host: 'localhost',
	logLevel: 'silent',
	notify: false,
	open: true,
	port: devServerPort,
	proxy: `localhost:${devServerPort}`,
	ui: false,
	watch: true,
};

/*
 |--------------------------------------------------------------------------
 | Plugins
 |--------------------------------------------------------------------------
 */
const plugins = [
	new BrowserSyncPlugin(browserSyncOptions),
	new ESLintPlugin(eslintOptions),
	new HtmlWebpackPlugin(htmlWebpackOptions),
];

module.exports = merge(base, {
	mode: 'development',
	context: path.join(__dirname, '../src'),
	devServer: {
		compress: true,
		static: {
			directory: path.join(__dirname, '../docs'),
		},
		devMiddleware: {
			writeToDisk: true,
		},
		client: {
			overlay: {
				errors: true,
				warnings: false,
			},
		},
	},
	ignoreWarnings: [
		{
			module: /module2\.js\?[34]/, // A RegExp
		},
		{
			module: /[13]/,
			message: /homepage/,
		},
		/warning from compiler/,
		(warning) => true,
	],
	devtool: 'source-map',
	entry: '../src/main.js',
	output: {
		clean: true,
		filename: '[name].js',
		path: path.resolve(__dirname, '../docs'),
		publicPath: '/docs/',
		library: 'vue-easter-egg-trigger',
		libraryTarget: 'umd',
	},
	plugins,
	stats: {
		assets: false,
		builtAt: true,
		chunkGroups: false,
		chunkModules: false,
		chunkOrigins: false,
		chunks: false,
		colors: true,
		entrypoints: false,
		errorDetails: true,
		errors: true,
		hash: false,
		modules: false,
		moduleTrace: false,
		performance: true,
		publicPath: false,
		usedExports: false,
		version: false,
		warnings: false,
	},
});
