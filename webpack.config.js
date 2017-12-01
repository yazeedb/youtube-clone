const { resolve } = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const root = (...args) => resolve(process.cwd(), ...args);

module.exports = {
	output: {
		path: root('dist'),
		filename: 'bundle.js'
	},
	entry: root('src/index'),
	resolve: {
		extensions: ['.js'],
		alias: {
			actions: root('src/actions'),
			reducers: root('src/reducers'),
			components: root('src/components'),
			shared: root('src/components/shared'),
			helpers: root('src/helpers'),
			assets: root('assets')
		}
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react'],
					plugins: ['transform-object-rest-spread']
				}
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'sass-loader']
				})
			},
			{
				test: /\.png/,
				use: [
					'url-loader?limit=10000',
					'img-loader'
				]
			}
		]
	},
	plugins: [new ExtractTextPlugin({ filename: '[name].css' })]
};
