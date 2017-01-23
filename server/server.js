const express = require('express');
const router = require('express').Router();
const app = express();
const path = require('path');
const morgan = require('morgan');
const controller = require('../database/controller');
const port = process.env.PORT || 8080;
const bodyParser = require('body-parser')

app.listen(port)

//Static serve files
app.use(express.static('../dist'))

// in case we want json encoded bodies
app.use(bodyParser.json());

//to retrieve ALL comments. 
app.get('/api/comments', controller.comments.get)

//to post a comment
app.post('/api/comments', controller.comments.post)
  //get comment from req.body
    //use comment data as argument for sendComment controller
      //invoke controller


const path = require('path');
const morgan = require('morgan');

const app = express();
app.listen(3000);

app.use(morgan('dev'));
app.use(express.static('../dist'));
