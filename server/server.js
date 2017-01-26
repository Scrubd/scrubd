const router = require('express').Router();
const morgan = require('morgan');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const controller = require('../database/controller');

const app = express();
const port = process.env.PORT || 3000;


app.listen(port, (err) => {
  if (err) console.log('err connecting');
  console.log(`listening on ${port}`);
});

app.use(morgan('dev'));

// Static serve files
app.use(express.static(path.join(__dirname, '../dist')));

// in case we want json encoded bodies
app.use(bodyParser.json());

// to retrieve ALL comments.
app.get('/api/comments', controller.comments.get);

// to post a comment
app.post('/api/comments', controller.comments.post);





