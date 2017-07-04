/**
 * Created by zhangxu on 2017/6/30.
 */
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    devtool: 'source-map',//Choose a style of source mapping to enhance the debugging process. These values can affect build and rebuild speed dramatically.

    entry: './src/main.ts',

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                loaders:['awesome-typescript-loader', 'angular2-template-loader']
            },
            {
                test:/\.html$/,
                loader: 'html-loader',
                exclude: './src/index.html'

            }
        ],

    },
    resolve: {
        extensions: [".ts", ".js"]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'    //在dist文件夹生成index.html   并且将对应的
        })
    ]



};