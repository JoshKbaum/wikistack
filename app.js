const express = require('express');
// const bodyParser = require('body-parser');
const morgan = require('morgan');
const layout = require('./views/layout');
const app = express();
const { db } = require('./models');

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  console.log('hello world');
  res.send(layout(''));
});



const PORT = 1337;
app.listen(PORT, () => {
  console.log(`we are listening on port ${PORT}`);
});

db.authenticate().then(() => {
    console.log('connected to the database');
  });
  