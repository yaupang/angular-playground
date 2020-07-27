import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowseComponent } from './modules/browse/pages/browse/browse.component';
import { HomeComponent } from './modules/home/pages/home/home.component';
import { InputMaxValDirective } from './shared/directives/input-max-val/input-max-val.directive';
import { HttpClientModule } from '@angular/common/http';
import { TictacComponent } from './modules/games/pages/tictac/tictac.component';
import { SquareComponent } from './modules/games/components/square/square.component';
import { BoardComponent } from './modules/games/components/board/board.component'

@NgModule({
  declarations: [
    AppComponent,
    BrowseComponent,
    HomeComponent,
    InputMaxValDirective,
    TictacComponent,
    SquareComponent,
    BoardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
