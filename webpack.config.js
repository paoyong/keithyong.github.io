var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        App: './js/App.jsx',
        vendors: ['react']
    },
    output: {
        path: './build',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.jsx$/, loaders: ['jsx-loader'] }
        ]
    }
};
