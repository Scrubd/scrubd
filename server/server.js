var express = require('express');
var app = express();
var path = require('path');
var morgan = require('morgan');

app.listen(8080)

// app.use(express.static('dist'));
app.use(express.static('../dist'))

// app.get('/', function(req, res) {
//     // res.send("heyy");
//     res.sendFile(path.join(__dirname + '/../dist/index.html'));

//     console.log("heyyy");
// });
