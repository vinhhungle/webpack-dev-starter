var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = function (ENV) {
  if (ENV === 'production') {
    return [
      new webpack.optimize.CommonsChunkPlugin('common.bundle.min.js'),
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
      })
    ]
  }
  return [
    new webpack.optimize.CommonsChunkPlugin('common.bundle.js'),
    new ExtractTextPlugin('styles.css')
  ]
}
