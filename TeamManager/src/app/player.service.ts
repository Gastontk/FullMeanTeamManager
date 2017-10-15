import { Injectable, OnInit } from '@angular/core';
import { Player } from './Player';
import { Gamestatus } from './gameStatus';
import { Http } from '@angular/http';
import 'rxjs';
import { Router, RouterModule, Routes, ActivatedRoute } from "@angular/router";





@Injectable()
export class PlayerService implements OnInit{
  players:Array<Player> =[];
  initStatus: Gamestatus;
  player:Player;
  constructor(private _http: Http, private _router: Router, private _route: ActivatedRoute) {
  	this.initStatus = {game:0, gameStatus:0};
  	

   // this._http.get(`/players`)
    // .subscribe( 
    //   (players) => {
    //     console.log('Successful response from the server', players.json());
    //     this.players = players.json();
    //   },
    //   (err) => {
    //     console.log(err);
    //   }
    // )

  	 //  	{_id:2,name:'Yvette Kennedy', position:'Loose Head Prop', status:[{game:0, gameStatus:0},{game:1, gameStatus:0},{game:2, gameStatus:0}]}];
  	  	// console.log(this.players);
   }
   ngOnInit(){
    console.log('INITTING')
   }


//for speed testing
  getPlayer(id){
    console.log('In getPlayer() with id of', id);
  }



  getPlayers(callback) {
    return this._http.get(`/players`)
    .subscribe( 
      (response) => {
        // console.log('Successful response from the server', response);
        callback(response);
        // this.players = response.json();
      },
      (err) => {
        console.log(err);
      }
    )
  }

    createPlayer(player){
      return this._http.post(`/players`, player)
    .subscribe( 
      (response) => {
        console.log('Successful response from the server');
        /* code */
      },
      (err) => {
        console.log('ERR RESPONSE',err);
      }
      )

    }

    deletePlayer(player){
      this.player = player;
      console.log('In Player Service and player to be deleted is ', player);
      for(var x=0;x<this.players.length;x++){
        if(this.players[x]._id == player._id){
          console.log('Found one', x);
          console.log('before splice:', this.players)
          this.players.splice(x,1);
          console.log('after splice:', this.players)

        }



      }
      return this._http.delete(`/player`, { body: this.player }).subscribe(
        (response) =>{
          console.log(response)
        // this._router.navigate(['']);
        this.getPlayers((response)=>{
        this.players = response.json();
      })
        },
        (err)=>{
          console.log('ERR', err);
        })

    }
//HERE
    updatePlayer(player){
      console.log('Updating', player)
      for(var x=0;x<this.players.length;x++){
        if(this.players[x]._id == player._id){
          console.log('Found one', x);
          this.players[x] = player;
          this._router.navigate(['']);


        }



      }

      this._http.put(`/players`, {body:player})
        .subscribe( 
          (response) => {
            console.log('Successful response from the server', response);


            /* code */
          },
          (err) => {
            console.log('err is',err);
          }
        )
    }

    simplePlayersReturn(){
      console.log('This.players is simplePlayersRetun is', this.players);
    }
   // getPlayers(){
   // 		return    this._http.get(`/players`).subscribe( 
   //    (players) => {
   //      console.log('Successful response from the server', players.json());
   //      this.players = players.json();
   //    },
   //    (err) => {
   //      console.log(err);
   //    }
   //  )
   // }
}


// {_id:1,name:'Gaston Kennedy', position:'Tight Head Prop'},
  	  	// {_id:2,name:'Yvette Kennedy', position:'Loose Head Prop'}