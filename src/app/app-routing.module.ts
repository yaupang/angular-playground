import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/pages/home/home.component';
import { BrowseComponent } from './modules/browse/pages/browse/browse.component';
import { TictacComponent } from './modules/games/pages/tictac/tictac.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'browse', component: BrowseComponent },
  { path: 'games', component: TictacComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
