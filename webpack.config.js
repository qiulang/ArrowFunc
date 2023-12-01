const webpack = require('webpack') //to access built-in plugins
const path = require('path')


module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
        libraryTarget: 'umd', //so nodejs can't it and browser can
        libraryExport: 'default',
        umdNamedDefine: true,
        library: '[name]'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                // exclude: /node_modules/,
                exclude: /node_modules\/(?!(debug)\/).*/,
                use: ['babel-loader']
            }
        ]
    }
}
