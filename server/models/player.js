console.log('Loading /models/player.js');
var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var PlayerSchema = new mongoose.Schema({
  _id: Number,
  name: String,
  position: String,
  status: [],

})
mongoose.model('Player', PlayerSchema);
console.log('Done loading Player model');



// {_id:1,name:'Steve Kennedy', position:'Tight Head Prop',status:[{game:0, gameStatus:0},{game:1, gameStatus:0},{game:2, gameStatus:0}]