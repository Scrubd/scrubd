const Sequelize = require('sequelize');

console.log(process.env);
let db;
if (process.env.NODE_ENV === 'production') {
  db = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, { host: process.env.DB_HOST });
} else {
  db = new Sequelize('scrubd', 'root', '');
}
console.log(db)

db.query('set foreign_key_checks=0', null);

const User = db.define('User', {
  name: {
    type: Sequelize.CHAR(20),
    unique: true,
    allowNull: false,
  },
}, {
  timestamps: false,
});

const Video = db.define('Video', {
  url: {
    type: Sequelize.CHAR(255),
    unique: true,
    allowNull: false,
  },
  views: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
}, {
  timestamps: false,
});

const Comment = db.define('Comment', {
  comment: Sequelize.TEXT,
  time_stamp: Sequelize.DECIMAL(10, 3),
}, {
  timestamps: false,
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
