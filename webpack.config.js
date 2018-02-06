const webpack = require('webpack');
const path = require('path');
module.exports = {
    entry: {
        'bundle': './src/main.js'
    },
    output: {
        path: path.resolve(__dirname, '/dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /(\.js|\.jsx)$/,
                use: ['babel-loader']
                // query: {
                //     presets: ['react', 'es2015']
                // }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|gif|jpg|jepg|svg|ttf|eot|woff|woff2)$/,
                use: 'file-loader'
            }
        ]
    },
    devServer: {
        open: true,
        port: 8884,
        inline: true,
        noInfo: true,
        historyApiFallback: true
    },
    plugins: [
        new webpack.DefinePlugin({
            'NODE.ENV': JSON.stringify('development')
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    }
};