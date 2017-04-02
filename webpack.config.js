const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'public');
const ENTRY_POINT = path.resolve(__dirname, 'views/react');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: ENTRY_POINT + '/home.jsx',
    module: {
        loaders: [{
            test: /\.jsx?/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.scss$/,
            loader: 'style-loader'
        }, {
            test: /\.scss$/,
            loader: 'css-loader',
            options: {
                sourceMap: true,
                modules: true,
                localIdentName: '[name]__[local]__[hash:base64:5]'
            }
        }, {
            test: /\.scss$/,
            loader: 'sass-loader',
            options: {
                sourceMap: true
            }
        }]
    },
    output: {
        path: BUILD_DIR,
        filename: 'js/bundle.js'
    }
};
