const path = require('path');
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.config.js');

module.exports = Merge(CommonConfig, {
    output: {
        path: path.resolve(__dirname, 'out/dev'),
        filename: 'bundle.js'
    },
    optimization: {
        minimize: false
    }
});