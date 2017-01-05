var path = require('path')
var webpack = require('webpack')

module.exports = {
  context: path.join(__dirname, '/client'),
  entry: {
    main: './main.js'
  },
  output: {
    filename: '[name].bundle.min.js',
    path: path.resolve('./dist/build'),
    publicPath: '/build/'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
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
