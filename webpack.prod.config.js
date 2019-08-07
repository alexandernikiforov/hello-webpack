const path = require('path');
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.config.js');

module.exports = Merge(CommonConfig, {
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle-[contenthash].js'
    },
    optimization: {
        minimize: true
    }
});