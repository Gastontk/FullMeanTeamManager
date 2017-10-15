import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayersComponent } from './players/players.component'
import { AddPlayerComponent } from './add-player/add-player.component'
import { PlayerStatusComponent } from './player-status/player-status.component';
import { EditPlayerComponent } from './edit-player/edit-player.component';

const routes: Routes = [
  {
    path: '',
    children: [],
    component: PlayersComponent
  },
  {
    path: 'addplayer',
    children: [],
    component: AddPlayerComponent
  },
  // {
  //   path: 'status',
  //   children: [],
  //   component: PlayerStatusComponent,
  //   pathMatch: 'full'

  // },
  // {
  //   path: 'status/0/status/:id',
  //   children: [],
  //   component: PlayerStatusComponent,
  //   pathMatch: 'full'

  // },
  {
    path: 'status/:id',
    children: [],
    component: PlayerStatusComponent,
    pathMatch: 'full'

  },
  // {
  //   path: 'status/0/status/:id',
  //   children: [],
  //   component: PlayerStatusComponent,
  //   pathMatch: 'full'

  // },
  {
    path: 'edit/:id',
    children: [],
    component: EditPlayerComponent,
    // pathMatch: 'full'

  },

  {
    path: '**',
    children: [],
    component: PlayersComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
