/**
 * Created by zhangxu on 2017/6/30.
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const helper = require('./config/helpers');


module.exports = {
    devtool: 'source-map',//Choose a style of source mapping to enhance the debugging process. These values can affect build and rebuild speed dramatically.

    entry: helper.root('src','main.ts'),

    output: {
        filename: '[name].bundle.js',
        path: helper.root('dist')
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
                exclude: helper.root('src','index.html')

            },
            {
                test:/\.css$/,
                loader:'raw-loader' //第二个模式过滤器是给组件局部样式的，并通过raw加载器把它们加载成字符串
                                    // —— 那是Angular期望通过元数据的styleUrls属性来指定样式的形式。
            }
        ],

    },
    resolve: {
        extensions: [".ts", ".js"]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: helper.root('src','index.html')   //在dist文件夹生成index.html   并且将对应的
        })
    ]



};