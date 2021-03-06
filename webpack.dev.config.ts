/**
 * Created by DuanG on 2017/2/15.
 */
var webpack=require('webpack');
var path=require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var HappyPack = require('happypack'),
    os = require('os'),
    happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });

/*var node_modules = path.resolve(__dirname, 'node_modules');
var pathToReact = path.resolve(node_modules, 'react/react');
var pathToReactDOM = path.resolve(node_modules,'react-dom/index');*/

var entry={
    'common/core': ['react','react-dom', 'react-router', 'react-redux', 'react-router-redux',
        'redux-thunk'],
    'index':'./src/entry/index'
};

module.exports={
    entry:entry,

    resolve:{
        root: path.resolve(__dirname,'src'),
        modulesDirectories: ['', 'src', 'node_modules', path.join(__dirname, '../node_modules')],
        extensions: ['', '.web.js', '.js', '.json']
    },
    output:{
        path:path.join(__dirname,'app'),
        publicPath:"/app/",
        filename:'[name].js'
    },

    module:{
        loaders:[
            {
                test: /\.js$/,
                exclude: /(node_modules|typings)/,
                include: /src/,
                loader:'react-hot'
            },
            {
                test: /\.js?$/,
                exclude: /(node_modules|typings)/,
                include: /src/,
                //loader: 'babel'
                loader: 'HappyPack/loader?id=jsHappy'
                //noParse: [pathToReact,pathToReactDOM]
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.less$/,
                loader: 'style!css!postcss!less'
            },
            {
                test: /\.css$/,
                loader: 'style!css!postcss'
            },
            {
                test: /\.(jpe?g|png|gif|svg|woff|eot|ttf)\??.*$/i,
                loader: 'url-loader?limit=8192'
            }
        ]
    },

    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.NoErrorsPlugin(),

        new webpack.optimize.CommonsChunkPlugin('common/core', 'common/core.js'),

        new HappyPack({
            id: 'jsHappy',
            cache: true,
            threadPool: happyThreadPool,
            loaders: [{
                path: 'babel',
                query: {
                    cacheDirectory: '.webpack_cache'
                }
            }]
        }),
        //new ExtractTextPlugin('styles.css'),
        new HtmlWebpackPlugin({
            inject: false,
            template: require('html-webpack-template'),
            appMountId: 'app',
            files: {
                "js": ["assets/head_bundle.js", "assets/main_bundle.js"],
            }
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        }),
        new OpenBrowserPlugin({url: `http://localhost:8889`}),
    ]
};

