const path = require('path');
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.config.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = Merge(CommonConfig, {
    output: {
        path: path.resolve(__dirname, 'out/dev'),
        filename: 'bundle.js'
    },
    plugins: [
        new MiniCssExtractPlugin({filename: "styles.css"})
    ],
    optimization: {
        minimize: false
    },
    devtool: "inline-source-map"
});