const Sequelize = require('sequelize');
const models = require('../models');
const jwt = require('jwt-simple');

const User = models.User;
const Video = models.Video;
const Comment = models.Comment;

module.exports = {
  logIn: (req, res) => {
    const name = req.body.name;
    User.findOrCreate({ where: { name } })
      .spread((user, created) => {
        const token = jwt.encode(user.dataValues, process.env.JWT_KEY || 'please do not see this, kthx');
        if (created) {
          res.status(201).end(token);
        } else {
          res.end(token);
        }
      })
      .catch((err) => {
        res.status(500).end('Sorry, something went wrong. It\'s not you, it\'s me. Bye.');
      });
  },
  checkAuth: (req, res) => {
    const token = jwt.decode(req.get('x-access-token'), process.env.JWT_KEY || 'please do not see this, kthx');
    User.findOne({ where: { name: token.name } })
      .then((user) => {
        res.json(user.dataValues);
      })
      .catch((err) => {
        res.status(404).json(err);
      });
  },
};
