var webpack = require('webpack');

module.exports = {
    entry: {
        app: './js/App.jsx'
    },
    output: {
        path: './build',
        filename: 'bundle.min.js'
    },
    module: {
        loaders: [
            { test: /\.scss$/, loaders: ['style', 'css', 'sass'] },
            { test: /\.jsx$/, loaders: ['jsx-loader'] }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({minimize: true})
    ]
};
