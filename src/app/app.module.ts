import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxsModule } from '@ngxs/store';
import { MyPokemonsComponent } from './components/my-pokemons/my-pokemons.component';
import { MyPokemons } from './../app/store/myPokemons/myPokemons.state';

@NgModule({
  declarations: [
    AppComponent,
    MyPokemonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot([
      MyPokemons
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
