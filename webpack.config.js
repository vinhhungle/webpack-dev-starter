var path = require('path')
var autoprefixer = require('autoprefixer')

var ENV = process.env.NODE_ENV || 'development'
var DEV_SERVER_PORT = 8080
var PROXY = {
  '/api': {
    target: 'http://localhost:3000',
    pathRewrite: {'^/api': '/api'}
  }
}

module.exports = {
  context: path.join(__dirname, '/client'),
  entry: {
    main: './main',
    // another: './another'
  },
  output: require('./.webpack/output')(ENV),
  devServer: require('./.webpack/devServer')(ENV, DEV_SERVER_PORT, PROXY),
  plugins: require('./.webpack/plugins')(ENV),
  module: require('./.webpack/loaders')(ENV),
  resolve: {
    extensions: ['', '.js', '.ts', '.jsx']
  },
  postcss: [
    autoprefixer({
      browsers: ['last 2 version']
    })
  ],
  progress: true,
  compress: true
}
