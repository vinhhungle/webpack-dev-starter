var webpack = require('webpack')
var path = require('path')

var ExtractTextPlugin = require('extract-text-webpack-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = function (ENV) {
  if (ENV === 'production') {
    return [
      new webpack.optimize.CommonsChunkPlugin('common.bundle.js'),
      new ExtractTextPlugin('styles.css'),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify(ENV)
        }
      }),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compress: { warnings: false },
        mangle: true,
        sourcemap: false,
        beautify: false,
        dead_code: true
      }),
      new CopyWebpackPlugin([
        { context: path.resolve('public'), from: 'images/**/*', to: path.resolve('dist') },
        { context: path.resolve('public'), from: 'assets/**/*', to: path.resolve('dist') },
        { context: path.resolve('public'), from: 'favicon.ico', to: path.resolve('dist') },
        { context: path.resolve('public'), from: '*.html', to: path.resolve('dist') }
      ])
    ]
  }
  return [
    new webpack.optimize.CommonsChunkPlugin('common.bundle.js'),
    new ExtractTextPlugin('styles.css')
  ]
}
