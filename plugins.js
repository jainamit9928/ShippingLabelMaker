const path = require('path');
const webpack = require("webpack")
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require("webpack-cleanup-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractCSSPlugin = new ExtractTextPlugin({
    filename: "style.css",
    disable: false
})

let commonChunk = new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    filename: '[name].[hash].js',
    minChunks: Infinity
})
let CopyWebpackPlugin = require('copy-webpack-plugin');
let OpenBrowserPlugin = require('open-browser-webpack-plugin');
let ManifestPlugin = require('webpack-manifest-plugin');
let htmWebpackPlugin = new HtmlWebpackPlugin({
    inject: 'body',
    filename: 'index.html',
    template: path.join(__dirname, 'src', 'html') + '/index.html',
})
exports.plugins = [
    new CopyWebpackPlugin([{ from: path.resolve('src/assets/'), to: 'assets' }]),
    extractCSSPlugin,
    commonChunk,
    new OpenBrowserPlugin({ browser: 'chrome' }),
    new ManifestPlugin(),
    new webpack.optimize.CommonsChunkPlugin({ name: 'meta', chunks: ['vendor'], filename: 'meta.[hash].js' }),
    htmWebpackPlugin,
    new CleanWebpackPlugin({
        preview: true,
    })
]