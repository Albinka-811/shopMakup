const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: './src/assets/images/[name].[ext]',
        clean: true,
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
        hot: true,
        compress: true,
        port: 8080,
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'Albinka dupcya',
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
                        loader: 'resolve-url-loader',
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true, // <-- !!IMPORTANT!!
                        }
                    }
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
