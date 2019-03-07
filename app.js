const express = require('express');
// const bodyParser = require('body-parser');
const morgan = require('morgan');
const layout = require('./views/layout');
const app = express();
const models = require('./models');
const wiki = require('./routes/wiki');
const user = require('./routes/user');

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use('/wiki', wiki)
app.use('/user', user)

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  console.log('hello world');
  // res.send(layout(''));
  res.redirect('/wiki')
});

const init = async () => {
  await models.Page.sync();
  await models.User.sync();

  const PORT = 1337;
  app.listen(PORT, () => {
  console.log(`we are listening on port ${PORT}`);

  console.log('TYPE OF  WIKI')
    console.log(typeof wiki)
});
}

init()


models.db.authenticate().then(() => {
    console.log('connected to the database');
  });
  