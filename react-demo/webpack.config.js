const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');//自动创建html文件
// const CleanWebpackPlugin = require('clean-webpack-plugin');//清除多余文件
module.exports = {
    // 入口文件
    entry: {
        app: './app/index.js'
    },
    // 输出到dist文件夹, 文件名字为bundle.js
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react'],
                        plugins: [//修改这里的
                            ["import", {libraryName: "antd", style: "css"}]//修改这里的
                        ] //修改这里的
                    }
                },
                exclude: /node_modules/,

            },{
                test: /\.css$/, 
                use: ['style-loader', 'css-loader'] 
           }, {
                //转换scss文件
                test: /\.scss$/,
                use:["style-loader","css-loader","sass-loader"]
                // 加载时顺序从右向左 
            },
            {
                // 转换文件png|svg|jpg|gif
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            }
        ]
    },
    devServer: {
        port: 3000,
        contentBase: './dist'
    },
    plugins: [
        //每次编译都会把dist下的文件清除，我们可以在合适的时候打开这行代码，例如我们打包的时候，开发过程中这段代码关闭比较好
        // new CleanWebpackPlugin(['dist']),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            //使用一个模板
            template: 'index.html' 
        })
    ]

}
