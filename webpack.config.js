const path = require('path');
const webpack = require('webpack');

module.exports = {
    context: __dirname,
    entry: ["./src/app.js"],
    output: {
        path: path.resolve(__dirname, 'public/build'),
        publicPath: '/public/build',
        filename: 'bundle.js',
    },
    module: {
        rules: [{
                test: /(\.js|.jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ["react-app"]
                }
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            }
        ]
    },
    resolve: {
        modules: [
            path.join(process.cwd(), 'app'),
            'node_modules'
        ],
        extensions: ['.js', '.jsx']
    }
};