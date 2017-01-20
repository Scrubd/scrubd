const Sequelize = require('sequelize');
const db = new Sequelize('scrubd', 'root', '');

const Users = db.define('User', {
  username: Sequelize.CHAR(20)
});

const Videos = db.define('User', {
  url: Sequelize.CHAR(255),
  views: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }
});

const Comments = db.define('User', {
  comment: Sequelize.TEXT,
  time_stamp: Sequelize.DECIMAL(10, 3)
});