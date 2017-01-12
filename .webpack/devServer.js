module.exports = function (ENV, DEV_SERVER_PORT, PROXY) {
  if (ENV === 'development') {
    return {
      contentBase: 'public',
      stats: 'minimal',
      inline: true,
      port: DEV_SERVER_PORT,
      proxy: PROXY,
      historyApiFallback: true
    }
  }
  return {}
}
