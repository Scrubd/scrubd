const Sequelize = require('sequelize');
const models = require('./models');
const url = require('url');

const User = models.User;
const Video = models.Video;
const Comment = models.Comment;

module.exports = {
  comments: {
    get: (req, res) => {
      const URL = url.parse(req.url, true).query.URL;
      Video.findOne({ where: { url: URL } })
        .then(video => {
          Comment.findAll({
            where: { VideoId: video.dataValues.id },
            order: 'time_stamp ASC',
            attributes: ['comment', 'time_stamp'],
            include: [
              {
                model: User,
                attributes: ['name']
              }
            ]
          })
            .then(results => {
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
        .then(commentIntance => {
          Video.findOne({ where: { url: URL } })
            .then(video => {
              commentIntance.setVideo(video);
              User.findOne({ where: { name } })
                .then(user => {
                  commentIntance.setUser(user);
                  res.sendStatus(201);
                });
            });
        })
        .catch(err => {
          res.status(400).end(JSON.stringify(err));
        });
    }
  },

  videos: {
    post: (req, res) => {
       const {url} = req.body;
      Video.findOrCreate({
        where: { url: url }
       })
       .spread((video, created) => {
         if (created) {
           res.send(video);
         } else {
           res.send(video);
         }
       })
       .catch(err => {
          res.status(400).end(JSON.stringify(err));
        }
        );
      }
  }
};