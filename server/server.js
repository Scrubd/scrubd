var express = require('express');
var app = express();
var path = require('path');
var morgan = require('morgan');

app.listen(3000);

app.use(morgan('dev'));
app.use(express.static('../dist'));