const express = require('express');
const app = express();
const ejs = require('ejs');
const morgan = require('morgan');
const config = require('./settings.json');

app.set('views', __dirname + '/views/');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public/'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));

app.get('/*', (req, res) => {
  res.render('index')
})


// thats a nice arguemnt
// unfortunetly i had sexual intercourse with your
// mother.

app.listen(config.port);