console.log('Loading routes file routes.js');
var PlayersController = require('../controllers/players.js')
console.log('PlayersController is', PlayersController);

var mongoose = require('mongoose');
// require('../models/player.js');
var Player = mongoose.model('Player');

//Modified from original routing for quotes app
// module.exports = function(app){
// 	// root route to render the index.ejs view
	// app.get('/', QuotesController.index),
// 	app.post('/quotes', QuotesController.create),
// 	app.get('/main', QuotesController.show)
// }


module.exports = function(app){
	app.get('/players', (req, res, next)=>{

    // PlayersController.seed()

    console.log('getting players');
    // res.json([{_id:1,name:'Steve Kennedy', position:'Tight Head Prop',status:[{game:0, gameStatus:0},{game:1, gameStatus:0},{game:2, gameStatus:0}]},
    //     {_id:2,name:'Yvette Kennedy', position:'Loose Head Prop', status:[{game:0, gameStatus:0},{game:1, gameStatus:0},{game:2, gameStatus:0}]}])

   Player.find({}, function (err, players){
      if(err){
        console.log('ERROR-', err)
      }else{
        // console.log('Response from server:', players);
          res.json(players);  

      }
    });





  });
 
  app.get('/products/:id', (req, res, next)=>{
    /* retrieve the product from the database (find the product by the req.params.id)  */
    /* and respond with the product using 'res.json(product)' */
  });
 
  app.post('/players', (req, res)=>{

    var myNewPlayer = new Player(req.body)
    console.log('SERTVE POST to player', myNewPlayer)
    myNewPlayer.save(function (err, response) {
      if (err) return console.error(err);
      console.log('Save response: ', response)
    });
    

    /* create a product, and respond with a success of failed message */
  });
 
  app.put('/players', (req, res, next)=>{
    // console.log('req.query is', req.url);
      // console.log('In app.put for update', req.body.body.status);
      var aPlayer = req.body;
      // console.log('aPlayer is', aPlayer.body._id);
      Player.update({_id: aPlayer.body._id}, aPlayer.body, function(err, response){
        if(err){
          console.log('Error is', err);
        }else{
          res.json(response);
        }
        // else if(response){
        //   console.log('response is', response)
        // }
        // else{
        //   console.log('Dunno. Sompen aint working.')
        // }
      
      })
      

    /* update the product (find the product by the req.params.id) */ 
    /* update that product with the posted product found through the req.body */
    /* and respond with the updated version of the product */
  });
 
  app.delete('/player', (req, res, next)=>{
    console.log('In Server Delete', req.body)
    Player.findOne({_id:req.body._id}, function (err, player){
      if(err){
        console.log('ERROR-', err)
      }else{
        var playerToDelete = player; 
        console.log('Response from server:',playerToDelete._id);
        


        playerToDelete.remove({ _id: playerToDelete.id }, function(err) {
            if (err) {
                    console.log('err:', err)
            }
            else {
                    console.log('Record deleted')
                    res.json({status:'OK'})
            }
        });





      }
    });


    /* delete the product (find the product by the req.params.id) */ 
    /* and respond with a success of failed message */
  });


  app.get('/*', (req, res)=>{
    console.log('BAD ADDRESS');
    console.log('req.query is', req.url);
    // alert('Bad address' + req.url);

    res.redirect('/');
  })

}










