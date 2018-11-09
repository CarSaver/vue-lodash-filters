var path = require('path')

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist/'),
        publicPath: '../dist/',
        filename: 'vue-lodash-filters.js',
        library: 'VueLodashFilters',
        libraryTarget: 'umd',
        globalObject: 'this'
    },
    externals: {
        lodash: {
            commonjs: 'lodash',
            commonjs2: 'lodash',
            amd: 'lodash',
            root: '_'
        }
    },
    mode: isProduction ? 'production' : 'development',
    module: {
        rules: [
            {
                test: /\.(js)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    devtool: isProduction ? '#source-map' : '#eval-source-map'
}
