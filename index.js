var path = require('path')
var express = require('express')


var app = express()

app.use(express.static(path.join(__dirname, './public')))
app.use(require('cookie-parser')())
app.use(require('body-parser').urlencoded({ extended: true }))

app.get('/', function (req, res) {
  console.log("hello")
  res.sendFile('./index.html')
})

app.listen(process.env.PORT || 3000, function () {
  console.log('server is running on 3000!')
})
