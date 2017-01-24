const Sequelize = require('sequelize');
const db = new Sequelize('scrubd', 'root', '');
const models = require('./models');
const url = require('url');

const User = models.User;
const Video = models.Video;
const Comment = models.Comment;

module.exports = {
  comments: {
    get: function (req, res) {
      console.log('MAKING IT HERE?');
      console.log('REQ.URL', req.url);
      const URL = url.parse(req.url, true).query.url;
      console.log(URL);
      Video.findOne({where: {url: URL} })
        .then(video => {
          // console.log(video);
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
                // console.log(comments);
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