const express = require('express')
const hbs = require('hbs');
require('dotenv').config();
const app = express()
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Middleware
app.use(express.static('src/public'));

app.get('/', function (req:any, res:any) {
  res.render('../src/views/home', {
    name: 'Allan',
    title: 'Curso de Node'
  });
})

app.get('/generic', function (req:any, res:any) {
  res.render('../src/views/generic', {
    name: 'Allan',
    title: 'Curso de Node'
  });
})

app.get('/elements', function (req:any, res:any) {
  res.render('../src/views/elements', {
    name: 'Allan',
    title: 'Curso de Node'
  });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})