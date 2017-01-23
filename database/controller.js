const Sequelize = require('sequelize');
const db = new Sequelize('scrubd', 'root', '');
const models = require('./models');

const User = models.User;
const Video = models.Video;
const Comment = models.Comment;

console.log(models);