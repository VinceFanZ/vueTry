const webpack = require('webpack')
const path = require('path')
const HtmlWbpackPlugin = require('html-webpack-plugin')

module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: [
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=2000&overlay=false&reload=true',
    './index.js'
  ],
  output: {
    publicPath: '/',
    filename: 'build/[name].js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader'],
        exclude: /node_modules/
      }
    ]
  },

  plugins: [
    new HtmlWbpackPlugin({
      template: './index.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
  ],
  devtool: 'inline-source-map'
}

