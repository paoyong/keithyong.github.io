var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        app: './js/App.jsx'
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
