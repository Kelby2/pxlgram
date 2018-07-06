const path = require('path');
const webpack = require('webpack');

const isProduction = process.env.NODE_ENV === 'production';
const devPlugins = [];
const prodPlugins = [
	new webpack.DefinePlugin({
		'process.env': {
			NODE_ENV: JSON.stringify('production')
		}
	}),
	new webpack.optimize.UglifyJsPlugin({
		compress: {
			warnings: true
		}
	})
];

const plugins = [
	...(isProduction ? prodPlugins : devPlugins)
];

module.exports = {
	context: __dirname,
	entry: path.join(__dirname, 'frontend', 'pxlgram.jsx'),
	output: {
		path: path.join(__dirname, 'app', 'assets', 'javascripts'),
		filename: 'bundle.js'
	},
	plugins,
	module: {
		rules: [
			{
				test: [/\.jsx?$/, /\.js?$/],
				exclude: /(node_modules)/,
				loader: 'babel-loader',
			}
		]
	},
	devtool: 'source-map',
	resolve: {
		extensions: ['.js', '.jsx', '*']
	}
};
