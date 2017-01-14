var path = require('path')

module.exports = function (ENV) {
  if (ENV === 'production') {
    return {
      filename: '[name].bundle.js',
      path: path.resolve('./dist/build')
    }
  }
  return {
    filename: '[name].bundle.js',
    path: path.resolve('./public/build'),
    publicPath: '/build/'
  }
}
