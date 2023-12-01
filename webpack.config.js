const webpack = require('webpack') //to access built-in plugins
const path = require('path')


module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
        libraryTarget: 'umd2',
        libraryExport: 'default',
        umdNamedDefine: true,
        library: '[name]'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader']
            }
        ]
    }
}
