const path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
function resolve(pathname) {
    path.resolve(__dirname, pathname);
}
const {
    VueLoaderPlugin
} = require('vue-loader');

module.exports = {
    entry: {
        'music': "./music.js",
        'EX':'./EX.js'
    },
    output: {
        //生产的文件夹为当前目录下的dist文件夹
        path: path.resolve(__dirname,'dist'),
        // publicPath: '/',
        filename: "[name].min.js"
    },
    mode: process.env.NODE_ENV === 'prd'? 'production':  'development',
    devtool: '#source-map',
    module: {
        rules: [
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.less$/, loader: "style-loader!css-loader!less-loader" },
            { test: /\.vue$/, loader: "vue-loader",
                options: {
                    loaders: {
                        css:'vue-style-loader!css-loader',
                        js: 'babel-loader'
                    }
                }
            },
            { test: /\.js$/, loader: "babel-loader" },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                loader: 'file-loader',
                query: {
                    limit:10000,
                    name: 'assets/[name].[ext]'
                }
            },
            {
                test: /\.(svg|woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue': 'vue/dist/vue.esm.js',
        }
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            title: 'QQMusic',
            filename: 'index.html',
            template: 'template/index.html',
            chunks: ['music'],
            inject: true,
            minify: {
              removeComments: true,
              collapseWhitespace: true,
              removeAttributeQuotes: false
            },
            chunksSortMode: 'dependency'
          })
    ]
};
