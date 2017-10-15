import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { FormsModule, ReactiveFormsModule }  from '@angular/forms';

//added
import { Router, ActivatedRoute } from "@angular/router";
import { PlayerService } from "../player.service";
import { Gamestatus } from '../gameStatus'



@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
player:Player = {_id: null,
      name: '',
      position: '',
      status:[],}
players:Array<Player>
playerStatus: Gamestatus;
  constructor(private _router: Router,
        private _playerService: PlayerService ) {

   }

  ngOnInit() {

      this._playerService.getPlayers((response)=>{
        console.log('In component CONSTRUCTOR', response)
        this.players = response;
      })
    this.player = {_id:null ,name:'', position:'', status:[{game:0, gameStatus:0}]}

  }


  submitForm($event){
  	this.player._id = Math.floor(Math.random() * 999);
    console.log('New player id is:', this.player._id)
    this.player.status = [{game:0, gameStatus:0},{game:1, gameStatus:0},{game:2, gameStatus:0}];
  	console.log('form submitted', this.player);
  	// this.players.splice(0,0, this.player)
    this._playerService.createPlayer(this.player)



      
     this._router.navigate(['']);



  }

}
