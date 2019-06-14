import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxsModule } from '@ngxs/store';
import { MyPokemonsComponent } from './components/my-pokemons/my-pokemons.component';
import { MyPokemons } from './../app/store/myPokemons/myPokemons.state';
import { CatchComponent } from './components/catch/catch.component';

@NgModule({
  declarations: [
    AppComponent,
    MyPokemonsComponent,
    CatchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot([
      MyPokemons
    ]),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
