const path = require('path');
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.config.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = Merge(CommonConfig, {
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle-[contenthash].js'
    },
    plugins: [
        new MiniCssExtractPlugin({filename: "styles-[contenthash].css"})
    ],
    optimization: {
        minimize: true
    }
});