const Sequelize = require('sequelize');
const models = require('./models');
const jwt = require('jwt-simple');
const url = require('url');

const User = models.User;
const Video = models.Video;
const Comment = models.Comment;

module.exports = {
  comments: {
    get: (req, res) => {
      const URL = url.parse(req.url, true).query.URL;
      Video.findOne({ where: { url: URL } })
        .then((video) => {
          Comment.findAll({
            where: { VideoId: video.dataValues.id },
            order: 'time_stamp ASC',
            attributes: ['comment', 'time_stamp'],
            include: [
              {
                model: User,
                attributes: ['name'],
              },
            ],
          })
            .then((results) => {
              if (results) {
                const comments = [];
                for (const item of results) {
                  comments.push(item.dataValues);
                }
                res.status(200).end(JSON.stringify(comments));
              }
            });
        });
    },
    post: (req, res) => {
      const { comment, time_stamp, URL, name } = req.body;
      Comment.create({ comment, time_stamp })
        .then((commentIntance) => {
          Video.findOne({ where: { url: URL } })
            .then((video) => {
              commentIntance.setVideo(video);
              User.findOne({ where: { name } })
                .then((user) => {
                  commentIntance.setUser(user);
                  res.sendStatus(201);
                });
            });
        })
        .catch((err) => {
          res.status(400).end(JSON.stringify(err));
        });
    },
  },

  videos: {
    post: (req, res) => {
      const URL = req.body.url;
      const name = req.body.name;
      Video.findOrCreate({
        where: { url: URL },
      }).spread((video, created) => {
        if (created) {
          console.log('I HAVE BEEN CREATED');
          User.findOne({ where: { name } }).then((user) => {
            video.setUser(user);
            console.log('FOREIGN KEY SET');
            res.status(201).send(video);
          });
        } else {
          res.send(video);
        }
      }).catch((err) => {
        res.status(400).end(JSON.stringify(err));
      });
    },
  },

  users: {
    logIn: (req, res) => {
      const name = req.body.name;
      User.findOrCreate({ where: { name } })
        .spread((user, created) => {
          const token = jwt.encode(user.dataValues, 'please do not see this, kthx'); // TODO: set to env variable
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
      const token = jwt.decode(req.get('x-access-token'), 'please do not see this, kthx'); // TODO: set to env variable
      User.findOne({ where: { name: token.name } })
        .then((user) => {
          res.json(user.dataValues);
        })
        .catch((err) => {
          res.status(404).json(err);
        });
    },
  },
};
