var express = require('express');
var app = express();
var path = require('path');
var morgan = require('morgan');

app.listen(8080)

app.use(express.static('../dist'))

//trivial server.js comment