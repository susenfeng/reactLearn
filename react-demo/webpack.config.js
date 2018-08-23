const path = require('path');
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
                    }
                },
                exclude: /node_modules/,

            }
        ]
    },
    devServer: {
        port: 3000,
        contentBase: './dist'
    }

}
