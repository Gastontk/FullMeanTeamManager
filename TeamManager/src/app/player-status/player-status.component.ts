import { Component, OnInit } from '@angular/core';
import { Player } from '../player'
import { PlayerService } from '../player.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-player-status',
  templateUrl: './player-status.component.html',
  styleUrls: ['./player-status.component.css']
})
export class PlayerStatusComponent implements OnInit {
	id:number;
	statusCode:string;
	players: Array<Player>;
	stringId: string;
	forNextId: Number;
  serverMessage:string = 'test';




  constructor(private _route: ActivatedRoute, 
  			  private _playerService: PlayerService) {

     this._playerService.getPlayers((players)=>{
        console.log('In component CONSTRUCTOR', players)
        this.players = players.json();
        this.serverMessage = 'Players recieved from server';
      })


           
  	//subscribe to route params
  	this._route.paramMap.subscribe(params => {
  			this.stringId = params.get('id');
  			this.id = parseInt(params.get('id'));
  			console.log('parseInt is', parseInt(params.get('id')));
  			console.log('param', this.id);
  			this.statusCode = params.get('id')
  			// this._playerService.getPlayers()



  		})







  }

  ngOnInit() {
  }

  // assign player to play
  	play(id){
  		console.log('Play',id);
  		for(var x=0; x<this.players.length; x++){
  			console.log('players[x]._id ', this.players[x]._id, 'this.id',  id);
  			console.log(this.players[x]);
  			this.forNextId = this.players[x]._id
  			if(this.forNextId ==(id)){
  				this.players[x].status[this.id].gameStatus = 1
  				console.log('FOUND A MATCH', this.forNextId, )
  				console.log('',this.players[x].status[this.id])
          this._playerService.updatePlayer(this.players[x]);
           // this._playerService.getPlayers((players)=>{
           //    console.log('In component CONSTRUCTOR', players)
           //    this.players = players.json();
           //  })

  			// 	// .gameStatus = 1
  			}
  		}
  	}

  	//Assign player to bench
  	bench(id){
  		console.log('Benching ID:', id)
  		for(var x=0; x<this.players.length; x++){
  			// console.log('players[x]._id ', this.players[x]._id, 'this.id',  id);
  			// console.log(this.players[x]);
  			this.forNextId = this.players[x]._id
  			if(this.forNextId ==(id)){
  				this.players[x].status[this.id].gameStatus = 2
  				console.log('FOUND A MATCH and created', this.players[x].status, this.id)
  				// console.log('',this.players[x].status[this.id])



          this._playerService.updatePlayer(this.players[x]);

          // this._playerService.getPlayers((players)=>{
          //   console.log('In component BENCH()', players)
          //   this.players = players.json();
          // })




  			// 	// .gameStatus = 1
  			}
  		}



  	}
  	//Assign player to default Undecided
  	 undecide(id){
  		console.log('Benching ID:', id)
  		for(var x=0; x<this.players.length; x++){
  			// console.log('players[x]._id ', this.players[x]._id, 'this.id',  id);
  			// console.log(this.players[x]);
  			this.forNextId = this.players[x]._id
  			if(this.forNextId ==(id)){

  				this.players[x].status[this.id].gameStatus = 0
          console.log('FOUND A MATCH and created', this.players[x].status, this.id)

  				// console.log('FOUND A MATCH', this.forNextId, )
  				// console.log('',this.players[x].status[this.id])
          this._playerService.updatePlayer(this.players[x]);


  			// 	// .gameStatus = 1
  			}
  	 }



  	}











}
