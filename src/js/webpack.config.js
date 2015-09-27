var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
var webpack = require('webpack');
var data = require('./data');

module.exports = {
    entry: './entry.js',
    output: {
        path: __dirname,
        filename: 'bundle.js',
        libraryTarget: 'umd'
    },
    module: {
        loaders: [
            { test: /\.jsx$/, loaders: ['jsx-loader'] }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({minimize: true}),
        new StaticSiteGeneratorPlugin('bundle.js', data.routes, data)
    ]
};
