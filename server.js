// require express and path
var express = require("express");
var path = require("path");
// create the express app
var app = express();
// require bodyParser since we need to handle post data for adding a user
var bodyParser = require("body-parser");
// var mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: true }));
//below required for post requests
app.use(bodyParser.json());
// static content 

//modified below for Angular
// app.use(express.static(path.join(__dirname, "./static")));

//for Angular
app.use(express.static(path.join(__dirname, "./TeamManager/dist")));

// setting up ejs and our views folder
// app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

require('./server/config/mongoose.js');


//Modified for default to be Angular app
// app.get('/', function(req, res){
// 	res.render('/index');
// })
require('./server/config/routes.js')(app);



app.listen(9000, function() {
  console.log("listening on port 9000");
})
