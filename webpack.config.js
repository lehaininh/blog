const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'public');
const ENTRY_POINT = path.resolve(__dirname, 'views/react');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        landing: ENTRY_POINT + '/Landing/landing.jsx',
        travel: ENTRY_POINT + '/Travel/travel.jsx'
    },
    devtool: "source-map",
    module: {
        loaders: [{
            test: /\.jsx?/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            modules: true,
                            localIdentName: '[name]__[local]__[hash:base64:5]'
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            })
        }]
    },
    plugins: [
        new ExtractTextPlugin('css/[name].css')
    ],
    output: {
        path: BUILD_DIR,
        filename: 'js/[name].js'
    }
};
