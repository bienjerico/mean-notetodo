var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


// Database
mongoose.connect('mongodb://localhost/mean-yoyo');

var app = express();

app.get('/',function(req,res){
  res.send("welcome");
  console.log("welcome");
})



app.use(express.static(__dirname + "/public"));
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
