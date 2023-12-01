const webpack = require('webpack') //to access built-in plugins
const path = require('path')


module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
        libraryTarget: 'umd', 
        libraryExport: 'default',
        umdNamedDefine: true,
        library: '[name]',
        //so both nodejs and browser can run it but nodejs still fails to oputput debug log, not sure why
        globalObject: 'this', 
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
