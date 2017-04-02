const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'public');
const ENTRY_POINT = path.resolve(__dirname, 'views/react');

module.exports = {
    entry: ENTRY_POINT + '/home.jsx',
    module: {
        loaders: [{
            test: /\.jsx?/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.scss?/,
            loader: ['style-loader', 'css-loader', 'sass-loader']
        }]
    },
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    }
};
