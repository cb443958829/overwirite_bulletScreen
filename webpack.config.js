const HtmlWebpackPlugin = require('html-webpack-plugin')
const { resolve } = require('path')
module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist'),
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.less$/, loader: 'style!css!less?sourceMap' },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, './src/index.html'),
    }),
  ],
  node: { fs: 'empty' },
  devtool: 'source-map',
  devServer: {
    open: true,
    contentBase: './',
  },
}
