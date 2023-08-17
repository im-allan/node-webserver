const express = require('express')
const app = express()
const port = 3000

app.get('/', function (req:any, res:any) {
  res.send('Home page 1')
})

app.get('*', function (req:any, res:any) {
  res.send('404 | Page not found')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})