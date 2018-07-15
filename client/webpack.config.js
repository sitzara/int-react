const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    mode: 'none',
    context: __dirname,
    devtool: 'source-map',
    entry: {
        index: ['./src/index.jsx'],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../public'),
        publicPath: path.resolve(__dirname, '../public'),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                }],
            },
            {
                test: /\.json$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'json-loader',
                }],
            },
            {
                test: /\.styl$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'resolve-url-loader',
                    'stylus-loader',
                ],
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'resolve-url-loader',
                ],
            },
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.styl'],
    },
    watchOptions: {
        aggregateTimeout: 100,
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name]Styles.css',
            chunkFilename: '[id].css',
        }),
    ],
    stats: {
        assets: true,
        children: false,
    },
};
