var express = require('express')
var app = express()
var port = process.env.PORT || 8080
app.get('/api/whoami', function (req, res) {
  console.log(req.headers)
  var r = {
      ipaddress: req.header('x-forwarded-for'),
      language: req.header('accept-language'),
      software: req.header('user-agent')
  }
   res.send(JSON.stringify(r))
})

app.listen(port, function () {
  console.log('Example app listening on port '+port)
})
