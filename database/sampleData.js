const Sequelize = require('sequelize');
const models = require('./models');

const User = models.User;
const Video = models.Video;
const Comment = models.Comment;

User.bulkCreate([
  { name: 'JOSEPH' },
  { name: 'BART' },
  { name: 'MARC' },
])
  .then(() => User.findAll())
  .then((users) => {
    const entities = [];
    for (const user of users) {
      entities.push(user.dataValues);
    }
    console.log('Bulk created:', entities);
  });

Video.bulkCreate([
  { url: 'https://media.w3.org/2010/05/sintel/trailer.mp4', UserId: 1 },
])
  .then(() => Video.findAll())
  .then((videos) => {
    const entities = [];
    for (const video of videos) {
      entities.push(video.dataValues);
    }
    console.log('Bulk created:', entities);
  });

Comment.bulkCreate([
  {
    comment: 'Sweet comment!',
    time_stamp: 5,
    UserId: 1,
    VideoId: 1,
  },
  {
    comment: 'So much effort!',
    time_stamp: 10,
    UserId: 2,
    VideoId: 1,
  },
  {
    comment: 'To customize!',
    time_stamp: 15,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: 'All this stuff!',
    time_stamp: 20,
    UserId: 1,
    VideoId: 1,
  },
  {
    comment: 'but I am!',
    time_stamp: 25,
    UserId: 2,
    VideoId: 1,
  },
  {
    comment: 'gonna do it!',
    time_stamp: 30,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: 'because...!',
    time_stamp: 35,
    UserId: 1,
    VideoId: 1,
  },
  {
    comment: 'I love!',
    time_stamp: 40,
    UserId: 2,
    VideoId: 1,
  },
  {
    comment: 'my classmates!',
    time_stamp: 40,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
  {
    comment: '<3',
    time_stamp: 41,
    UserId: 3,
    VideoId: 1,
  },
])
  .then(() => Comment.findAll())
  .then((comments) => {
    const entities = [];
    for (const comment of comments) {
      entities.push(comment.dataValues);
    }
    console.log('Bulk created:', entities);
  });
