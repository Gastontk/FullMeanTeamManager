console.log('Loading products controller /server/controllers/players.js');
var mongoose = require('mongoose');
require('../models/player.js');
var Player = mongoose.model('Player');

module.exports = {

	seed(){
		console.log('Seeding DB');
		var firstSeed =  new Player({_id: 100, name:'Yvette Kennedy', position:'Loose Head Prop',status:[{game:0, gameStatus:0},{game:1, gameStatus:0},{game:2, gameStatus:0}]})
		firstSeed.save(function (err, result) {
		if (err){

			console.log(err)

		} else{
			console.log(result);
		}
		  // saved!
		});

	}
	// players: function(req, res){
	// 	// res.render('index');
	// 	console.log('products controller')

	// },
	// show: function (req, res) {
	//   Product.find({}, function (err, quotes){
	//     res.render('main', {quotes:quotes});  
	//   });
	// },

	// create: function(req,res){
	//   var quote = new Quote({name: req.body.name, quote: req.body.quote});
	//   quote.save(function(err) {
	//     if(err){
	//       console.log("something went wrong");
	//     } else {
	//       res.redirect('/main');
	//     }
	//   })
	// }
}


