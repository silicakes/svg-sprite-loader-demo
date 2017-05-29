const webpack = require("webpack");
const fs = require("fs");
const projectRoot = process.cwd();
const SpriteLoaderPlugin = require("svg-sprite-loader/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const baseConfig = {
	entry: {
		bundle: "./src/index.tsx"
	},



	output: {
		path: `${projectRoot}/dist`,
		publicPath: '/'
	},

	plugins: [
		new SpriteLoaderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			template: "index.html"
		}),
		new webpack.NamedModulesPlugin()
	],

	devtool: "eval",

	resolve: {
		extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
		alias: {
			components: `${projectRoot}/src/components/`,
			assets: `${projectRoot}/src/assets/`,
		}
	},
	module: {
		rules: [{
			test: /\.tsx?$/,
			loader: "ts-loader"
		}, {
			test: /\.scss$/,
			use: [
				{
					loader: 'style-loader'
				}, {
					loader: 'css-loader',
					options: {
						modules: true,
						minimize: true,
						localIdentName: '[name]__[local]___[hash:base64:5]',
						importLoaders: 1
					}
				}, {
					loader: 'sass-loader',
				}
			]
		},{
			test: /\.svg$/,
			use: [{
				loader: 'svg-sprite-loader',
				options: {
					extract: true,
					spriteFilename: "icon-[hash:5].svg"
				}
			}, {
				loader: 'svgo-loader',
				options: {
					plugins: [
						{removeTitle: true},
						{convertColors: {shorthex: false}},
						{convertPathData: false}
					]
				}
			}]
		}]
	},
	devServer: {
		quiet: false,
		port: 3000,
		hot: true,
		inline: true,
		historyApiFallback: true,
		publicPath: `/`,
		headers: {
			"Access-Control-Allow-Origin": "http://localhost:8080",
			"Access-Control-Allow-Headers": "X-Requested-With"
		}
	}
};

module.exports = baseConfig;