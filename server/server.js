const express = require('express');
const router = require('express').Router();
const app = express();
const path = require('path');
const morgan = require('morgan');
const controller = require('../database/controller');
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');

app.use(morgan('dev'));

app.listen(port);

//Static serve files
app.use(express.static('../dist'));

// in case we want json encoded bodies
app.use(bodyParser.json());



//to retrieve ALL comments.

app.get('/api/comments', controller.comments.get);


//Dummy tests for Postman
// app.get('/api/comments', function(req, res){
//   res.send("get is working")
// })

//to post a comment
app.post('/api/comments', controller.comments.post);

// Dummy tests for Postman
app.post('/api/comments', function(req, res){
  console.log(req.body);
  res.send(req.body + ": post is working");
})




