const Sequelize = require('sequelize');
const db = new Sequelize('scrubd', 'root', '');
const models = require('./models');

const User = models.User;
const Video = models.Video;
const Comment = models.Comment;

module.exports = {
  comments: {
    get: function (req, res) {
      Comment.find();
    },
    post: function (req, res) {
      const {comment, time_stamp} = req.body;
      Comment.create({comment: comment, time_stamp: time_stamp})
        .then(instance => {
          res.sendStatus(201);
        })
        .catch(err => {
          res.status(400).end(JSON.stringify(err));
        });
    }
  }
};