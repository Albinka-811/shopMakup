const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'assets/images/[name][ext]',
        clean: process.env.NODE_ENV === "production",
    },
    resolve: {
        alias: {
            '@assets': path.resolve(__dirname, 'src/assets/'),
        },
    },
    devtool: 'inline-source-map',
    devServer: {
        static: path.resolve('./src/assets/'),
        historyApiFallback: true,
        port: 8080,
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'shop',
        template: path.resolve(__dirname, './public/index.html'),
        filename: 'index.html'
    })],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        }
                    },
                ]
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
};
