const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();
app.listen(3000);

app.use(morgan('dev'));
app.use(express.static('../dist'));