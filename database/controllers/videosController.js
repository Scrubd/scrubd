const Sequelize = require('sequelize');
const models = require('../models');

const User = models.User;
const Video = models.Video;

module.exports = {
  get: (req, res) => {
    Video.findAll({ limit: 30 }).then((results) => {
      if (results) {
        const videos = [];
        for (const item of results) {
          videos.push(item.dataValues);
        }
        res.status(200).end(JSON.stringify(videos));
      }
    }).catch((err) => {
      res.status(400).end(JSON.stringify(err));
    });
  },
  post: (req, res) => {
    const { url, name, increment } = req.body;
    Video.findOrCreate({
      where: { url },
    }).spread((video, created) => {
      if (increment) {
        video.increment('views');
      }
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
  put: (req, res) => {
    const { id } = req.body;
    Video.findOne({ where: { id } }).then((video) => {
      video.increment('views');
      res.json(video);
    }).catch((err) => {
      res.status(500).json(err);
    });
  },
};
