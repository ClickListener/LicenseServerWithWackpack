/**
 * Created by zhangxu on 2017/6/30.
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const helper = require('./config/helpers');

const ProvidePlugin = require('./node_modules/webpack/lib/ProvidePlugin');

const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'source-map',//Choose a style of source mapping to enhance the debugging process. These values can affect build and rebuild speed dramatically.

    entry: {
        'polyfills': helper.root('src', 'polyfills.ts'),
        'vendor': [
            'tether', 'jquery', 'bootstrap', 'mdb'
        ],
        'main' : helper.root('src','main.ts')
    },

    output: {

        path: helper.root('dist'),
        publicPath: '/',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
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
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file-loader?name=assets/[name].[hash].[ext]',
            },

            {
                test: /\.css$/,
                exclude: helper.root('src', 'app'),
                loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css-loader?sourceMap' })
            },
            {
                test:/\.css$/,
                include: helper.root('src', 'app'),
                loader:'raw-loader' //第二个模式过滤器是给组件局部样式的，并通过raw加载器把它们加载成字符串
                                    // —— 那是Angular期望通过元数据的styleUrls属性来指定样式的形式。
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'postcss', 'sass']
            }
        ],

    },
    resolve: {
        extensions: [".ts", ".js"],
        alias: {
            'jquery': helper.root('node_modules', 'mdbootstrap/js/jquery-3.1.1'),
            'tether': helper.root('node_modules', 'mdbootstrap/js/tether.js'),
            'bootstrap': helper.root('node_modules', 'mdbootstrap/js/bootstrap.js'),
            'mdb': helper.root('node_modules', 'mdbootstrap/js/mdb.js')
        }
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: helper.root('src','index.html')   //在dist文件夹生成index.html   并且将对应的
        }),

        new ProvidePlugin({
            $ : 'jquery',
            jquery: "jquery",
            jQuery:"jquery",
            Tether: 'tether',
            tether: 'tether'

        }),

        new webpack.optimize.CommonsChunkPlugin({
            name : ['main', 'vendor', 'polyfills']
        }),


        /**
         * Plugin: ExtractTextPlugin
         * Description: Extracts imported CSS files into external stylesheet
         *
         * See: https://github.com/webpack/extract-text-webpack-plugin
         */
        new ExtractTextPlugin('[name].css'),



        new webpack.LoaderOptionsPlugin({
            debug: false,
            options: {
                htmlLoader: {
                    // minimize: false // workaround for ng2
                    // see https://github.com/angular/angular/issues/10618#issuecomment-250322328
                    minimize: true,
                    removeAttributeQuotes: false,
                    caseSensitive: true,
                    customAttrSurround: [
                        [/#/, /(?:)/],
                        [/\*/, /(?:)/],
                        [/\[?\(?/, /(?:)/]
                    ],
                    customAttrAssign: [/\)?\]?=/]
                }
            }
        })


    ]



};