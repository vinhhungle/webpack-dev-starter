module.exports = function (ENV) {
  if (ENV === 'development') {
    return {
      contentBase: 'public',
      stats: 'minimal',
      inline: true,
      port: 8080,
      proxy: {
        '/api': {
          target: 'http://localhost:3000',
          pathRewrite: {'^/api': '/api'}
        }
      }
    }
  }
  return {}
}
