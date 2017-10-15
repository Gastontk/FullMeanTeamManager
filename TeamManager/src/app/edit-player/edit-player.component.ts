import { Component, OnInit } from '@angular/core';
import { PlayerService } from "../player.service";
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from '../player';
import { FormsModule, ReactiveFormsModule }  from '@angular/forms';



@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {
	id:number;
	players:Array<Player> = [];
	myPlayer:Player;
	player:Player
	stringId:string;
  constructor(private _playerService: PlayerService,
  				private _route: ActivatedRoute,
  				private _router: Router
  	) {
      this._playerService.getPlayers((players)=>{
        console.log('In PlayerService CONSTRUCTOR', players.json())
        this.players = players.json();
        // this.findPlayer();
        for(var x = 0; x<this.players.length;x++){
              if(this.players[x]._id== this.id){
                console.log('Match')
                this.player = this.players[x];
                break;
              }

          }






      })
    	this._route.paramMap.subscribe(params => {
    			// this.stringId = params.get('id');
    			this.id = Number(params.get('id'))
    			// console.log('parseInt is', Number(params.get('id')));
    			// console.log('param', this.id);
    			// this.statusCode = params.get('id')
    			// this._playerService.getPlayers()



    		})



   }

  ngOnInit() {
      // this._playerService.getPlayers((players)=>{
      //   console.log('In PlayerService CONSTRUCTOR', players.json())
      //   this.players = players.json();
      //   this.findPlayer();

      // })
  }

 //get ind player from this.players
 findPlayer(){
 	console.log('In findPlayer');

 	for(var x = 0; x<this.players.length;x++){
        if(this.players[x]._id== this.id){
        	console.log('Match')
        	this.player = this.players[x];
        }

    }
 	// this.player = 
 }

// Edit individual player
modPlayerInfo(){
	console.log('Modifedplayer is', this.player);
	for(var x = 0; x<this.players.length;x++){
        if(this.players[x]._id== this.player._id){
        	console.log('Match')
        	this.players[x] = this.player
        	this._playerService.updatePlayer(this.player)
        	// this.player = this.players[x];
          this._router.navigate(['/players']);

        	


        }

    }


}




}
