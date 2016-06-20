var webpack = require('webpack');
var path = require('path');

var CopyWebpackPlugin = require("copy-webpack-plugin")


var BUILD_DIR = path.resolve(__dirname, 'build');
var APP_DIR = path.resolve(__dirname, 'src');

module.exports = {
    context: APP_DIR,

    devtool: "sourcemaps",

	entry: {
        javascript: "./index.js",
    },

	output: {
		path: BUILD_DIR,
		filename: 'bundle.js'
	},

	module: {
		loaders: [
			{
				test: /\.js$/,
				include: APP_DIR,
				loaders: ["react-hot",'babel'],
			},
            {
                test: /\.html$/,
                loader: "file?name=[name].[ext]",
            }
		]
	},
    plugins: [
        new CopyWebpackPlugin([
            {
                from: "index.html"
            },
            {
                from: "css",
                to: "css"
            },
            {
                from: "static",
                to: "static"
            }
        ])
    ]
};
