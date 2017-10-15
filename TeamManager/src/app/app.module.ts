import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayersComponent } from './players/players.component';
import { AddPlayerComponent } from './add-player/add-player.component';
import { PlayerService } from './player.service';
import { PlayerStatusComponent } from './player-status/player-status.component';
import { HttpModule } from '@angular/http';
import { EditPlayerComponent } from './edit-player/edit-player.component';


@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    AddPlayerComponent,
    PlayerStatusComponent,
    EditPlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
  ],
  providers: [PlayerService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
