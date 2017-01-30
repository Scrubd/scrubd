const router = require('express').Router();
const morgan = require('morgan');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const comments = require('../database/controllers/commentsController');
const videos = require('../database/controllers/videosController');
const users = require('../database/controllers/usersController');

const app = express();
const port = process.env.PORT || 3000;


app.listen(port, (err) => {
  if (err) {
    console.log('err connecting');
  }
  console.log(`listening on ${port}`);
});

app.use(morgan('dev'));

// Static serve files
app.use(express.static(path.join(__dirname, '../dist')));

// in case we want json encoded bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// to retrieve ALL comments.
app.get('/api/comments', comments.get);

// to post a comment
app.post('/api/comments', comments.post);

// to post a video URL
app.post('/api/videos', videos.post);
// to get  a video URL + comments
app.get('/api/videos', videos.get);
// to increment a video's views
app.put('/api/videos', videos.put);
// add a new user
app.post('/api/users', users.logIn);
app.get('/api/users', users.checkAuth);
