const Sequelize = require('sequelize');
const models = require('./models');
const url = require('url');

const User = models.User;
const Video = models.Video;
const Comment = models.Comment;

module.exports = {
  comments: {
    get: function (req, res) {
      const URL = url.parse(req.url, true).query.URL;
      console.log(URL);
      console.log(req.url);
      Video.findOne({where: {url: URL} })
        .then(video => {
          Comment.findAll({
            where: {VideoId: video.dataValues.id},
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
                for (let item of results) {
                  comments.push(item.dataValues);
                }
                res.status(200).end(JSON.stringify(comments));
              }
            });
        });
    },
    
    post: function (req, res) {
      const {comment, time_stamp, URL, name} = req.body;
      Comment.create({comment: comment, time_stamp: time_stamp})
        .then(comment => {
          Video.findOne({where: {url: URL} })
            .then(video => {
              comment.setVideo(video);
              User.findOne({where: {name: name} })
                .then(user => {
                  comment.setUser(user);
                  res.sendStatus(201);
                });
            });
        })
        .catch(err => {
          res.status(400).end(JSON.stringify(err));
        });
    }
  }
};