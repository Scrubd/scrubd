const mysql = require ('mysql');

const connection =  mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'scrubd'
});

module.exports = connection;

const post = {
  comment: 'FIRST!!!',
  user_id: 1,
  video_id: 1,
  time_stamp: 11.111
};

connection.query('INSERT INTO Users SET ?', {name: 'MARC'}, (err, rows, fields) => {
  if (err) {
    console.log(err);
  }
});

connection.query('INSERT INTO Videos SET ?', {url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', user_id: 1}, (err, rows, fields) => {
  if (err) {
    console.log(err);
  }
});

connection.query('INSERT INTO Comments SET ?', post, (err, rows, fields) => {
  if (err) {
    console.log(err);
  }
});