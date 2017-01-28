const Sequelize = require('sequelize');
const models = require('../models');

const User = models.User;
const Video = models.Video;

module.exports = {
  post: (req, res) => {
    const { url, name } = req.body;
    Video.findOrCreate({
      where: { url },
    }).spread((video, created) => {
      if (created) {
        User.findOne({ where: { name } }).then((user) => {
          video.setUser(user);
          res.status(201).send(video);
        });
      } else {
        res.send(video);
      }
    }).catch((err) => {
      res.status(400).end(JSON.stringify(err));
    });
  },
};
