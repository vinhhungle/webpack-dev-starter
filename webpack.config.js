var path = require('path')

module.exports = {
  context: path.join(__dirname, '/client'),
  entry: {
    main: './main.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve('./public/build'),
    publicPath: '/build/'
  },
  devServer: {
    contentBase: 'public',
    inline: true,
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        pathRewrite: {'^/api': '/api'}
      }
    }
  },
  compress: true,
  progress: true,
  stats: {
    colors: true
  }
}
