const path = require('path')

module.exports = {
    entry: './entry.jsx',
    output: {
        path: __dirname + "./../backend/public",
        filename: './bundle.js'
    },
    devServer: {
        port: 8080,
        contentBase: './../backend/public'
    },
    devtool: 'inline-source-map',
    watchOptions: {
        poll: true,
        ignored: /node_modules/
    },
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(css|scss|scss)$/,
                use: [
                    'style-loader', // importar os arquivos .css
                    'css-loader', // dá o suporte para o javascript usar css nas tags jsx eu acho
                    'sass-loader' // importa .scss e sass precisa instalar o node-sass
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|svg|png|gif|jpg)$/,
                use: ['file-loader']
            }
        ]
    }
}