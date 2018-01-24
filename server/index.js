const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser =  require('body-parser');
const path = require('path');
const keys = require('../config/keys');

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
require('./models/home');

require('./routes/web')(app);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('build'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server Starts on ${PORT}`);
});