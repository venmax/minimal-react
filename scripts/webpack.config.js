var path    = require('path');
const webpack = require('webpack'); //to access built-in plugins

module.exports = {
    entry: [
        path.join(__dirname, '../src/index.js')
    ],
    output: {
        filename: 'offact.js',
        path: path.join(__dirname, '../dist')
    },
    module:{
        rules:[{
            exclude: /node_modules/,
            test: /\.jsx?$/,
            loader: 'babel-loader'
        }]
    },
    plugins:[
        new webpack.ProgressPlugin(),
    ],
    devServer: {
      contentBase: path.join(__dirname, '../dist'),
      compress: true,
      port: 9000
    }
  }