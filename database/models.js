const Sequelize = require('sequelize');
const db = new Sequelize('scrubd', 'root', '');

const User = db.define('User', {
  name: {
    type: Sequelize.CHAR(20),
    unique: true
  }
}, {
  timestamps: false
});

const Video = db.define('Video', {
  url: {
    type: Sequelize.CHAR(255),
    unique: true
  },
  views: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }
}, {
  timestamps: false
});

const Comment = db.define('Comment', {
  comment: Sequelize.TEXT,
  time_stamp: Sequelize.DECIMAL(10, 3)
}, {
  timestamps: false
});

User.hasMany(Comment);
Comment.belongsTo(User);

User.hasMany(Video);
Video.belongsTo(User);

Video.hasMany(Comment);
Comment.belongsTo(Video);

User.sync();
Video.sync();
Comment.sync();

module.exports.User = User;

module.exports.Video = Video;

module.exports.Comment = Comment;

// User.find()
// .then( (result) => {
//   if (result) {
//     console.log(result.dataValues);
//   }
// });

// var hey;

// User.create({name: 'MARC'})
// .then(instance => {
//   if (instance) {
//     hey = instance;
//     console.log(instance);
//   }
// });

// Video.create({url: 'http://docs.sequelizejs.com/en/latest/docs/'})
// .then(instance => {
//   if (instance) {
//     instance.setUser(hey);
//   }
// });