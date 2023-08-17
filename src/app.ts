const express = require('express')
const app = express()
const port = 3000

// Middleware
app.use(express.static('src/public'));

app.get('/', function (req:any, res:any) {
  res.send('index.html')
})

app.get('*', function (req:any, res:any) {
  res.sendFile(__dirname +'/public/404.html');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})