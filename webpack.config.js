var path = require('path')

module.exports = {
    devtool: 'source-map',
    entry: [
        './src/app.js'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    module: {
        loaders: [
            {
                test: /\.js/,
                loaders: ['babel'],
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader?sourceMap'
            }
            ,
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file?name=[path].[name].[ext]'
                ]
            }
        ]
    },
    sassLoader: {
        sourceMap: true
    },
    resolve: {
        alias: {
            styles: path.join(__dirname, 'src/sass')
        }
    }
}