import { Component, OnInit } from '@angular/core';
import { Player } from '../player'
import { PlayerService } from '../player.service'
@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
	player:Player;
	players:Array<Player>;
  confirm: boolean;
  mySub: any;
  serverMessage:string='Data Loading'

  constructor(private _playerService: PlayerService) { 


  	  // this.players = [{_id:1,name:'Gaston Kennedy', position:'Tight Head Prop'},
  	  // 	{_id:2,name:'Yvette Kennedy', position:'Loose Head Prop'}];
  	  // this.players = (this.player;

      this._playerService.getPlayers((response)=>{
        // console.log('In component CONSTRUCTOR', response)
        this.players = response.json();
        this.serverMessage = 'Data loaded';
      })

  }


  ngOnInit() {
  }





  deletePlayer(player){
    this.confirm = confirm('Are you sure you wish to remove ' + player.name +'?')

    // console.log(this.confirm);
    if(this.confirm ==false){
      return;
    }
    for( var x=0; x< this.players.length;  x ++){
     if(this.players[x]._id == player._id){
       console.log('Found a match');
       this.players.splice(x, 1)
       console.log(this.players);
     }
    }
    this._playerService.deletePlayer(player);
    this.ngOnInit()
  	// console.log(player)
  	// for( var x=0; x< this.players.length;  x ++){
  	// 	if(this.players[x]._id == player._id){
  	// 		console.log('Found a match');
  	// 		this.players.splice(x, 1)
  	// 		console.log(this.players);
  	// 	}
  	// }
  }

}





















