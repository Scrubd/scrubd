var express = require('express');
var app = express();
var path = require('path');
var morgan = require('morgan');
const controller = require('../database/controller');

app.listen(8080)

app.use(express.static('../dist'))

//to retrieve ALL comments. 
app.get('/api/comment', function(req, res){
  controller.getComments;
})

//to post a comment
app.post('/api/comment', function(req, res){
  controller.sendComment;
})




