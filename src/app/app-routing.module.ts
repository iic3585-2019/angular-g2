import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyPokemonsComponent } from './../app/components/my-pokemons/my-pokemons.component';
import { CatchComponent } from './components/catch/catch.component';

// Components
const routes: Routes = [
  { path: 'myPokemons', component: MyPokemonsComponent },
  { path: '', redirectTo: '/myPokemons', pathMatch: 'full' },
  { path: 'catch', component: CatchComponent },
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
