var express = require('express')
var path = require('path')

var app = express()
var PORT = 3000

app.use('/', express.static(path.resolve('./dist')))

app.get('/api', function (req, res) {
  console.log('request url: ', req.originalUrl)
  res.json({ status: 'OK' })
})

app.listen(PORT, function () {
  console.log('Express server is listening on http://localhost:' + PORT)
})
