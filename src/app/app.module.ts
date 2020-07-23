import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowseComponent } from './modules/browse/pages/browse/browse.component';
import { HomeComponent } from './modules/home/pages/home/home.component';
import { InputMaxValDirective } from './shared/directives/input-max-val/input-max-val.directive';

@NgModule({
  declarations: [
    AppComponent,
    BrowseComponent,
    HomeComponent,
    InputMaxValDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
