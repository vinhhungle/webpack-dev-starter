var express = require('express')

var app = express()
var PORT = 3000

app.get('/', function (req, res) {
  console.log('request url: ', req.originalUrl)
  res.json({ status: 'OK' })
})

app.listen(PORT, function () {
  console.log('Express server is listening on http://localhost:' + PORT)
})
