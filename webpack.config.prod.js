const  Merge  =  require('webpack-merge');
const  CommonConfig  =  require('./webpack.config.js');
const  webpack  =  require('webpack');

module.exports  =  Merge(CommonConfig, {
        plugins: [
                new  webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress: {
                warnings: false,
                screw_ie8: true,
                conditionals: true,
                unused: true,
                comparisons: true,
                sequences: true,
                dead_code: true,
                evaluate: true,
                if_return: true,
                join_vars: true,
            },
            output: {
                comments: false
            },
                })
        ]
}) 
