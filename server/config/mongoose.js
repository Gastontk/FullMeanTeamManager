console.log('Loading mongoose config file /server/config/mongoose.js');
var mongoose = require('mongoose');
//require fs modulefor loading files
var fs = require('fs');
//require path to get models path
var path = require('path');
//connect to mongoose
mongoose.connect('mongodb://localhost/players');

//In order to automate the loading of every model in the models folder
var models_path = path.join(__dirname, './../models/');
fs.readdirSync(models_path).forEach(function(file){
	console.log('XLoading:', (models_path + '/' + file));
	require(models_path + '/' + file);



})
