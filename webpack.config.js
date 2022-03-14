const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports ={
    mode: "development",
    output: {
        path: path.resolve(__dirname, '/dist'),
        filename: "index.bundle.js"
    },
    devServer: {
        port: 3000
    },
    resolve: {
        extensions: ['','.js','.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "public/index.html"
        })
    ]
}
