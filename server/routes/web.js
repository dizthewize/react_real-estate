const mongoose = require('mongoose');
const Home  = mongoose.model('homes');
const keys = require('../../config/keys');

module.exports = app => {
  app.get('/api/data', (req, res) => {
    Home.find({}, (err, homes) => {
      let homeList = {};

      homes.forEach((home) => {
        homeList[home] = home;
      });

      res.send(homeList);
    });
  });
};
