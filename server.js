var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


// Database
mongoose.connect('mongodb://localhost/mean-yoyo');

var app = express();

app.use(express.static(__dirname + "/public"));


app.get('/',function(req,res){
  // res.send("welcome");
  res.sendFile('/index.html');
  console.log("welcome");
})


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

var note = require('./router/note');
var todo = require('./router/todo');

app.use('/api', note);
app.use('/api', todo);


app.listen(3000);
console.log("Server running on port 3000");
