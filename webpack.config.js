var path = require('path')
var autoprefixer = require('autoprefixer')

var ENV = process.env.NODE_ENV || 'development'

module.exports = {
  context: path.join(__dirname, '/client'),
  entry: {
    main: './main',
    login: './login'
  },
  output: require('./.webpack/output')(ENV),
  devServer: require('./.webpack/devServer')(ENV),
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
