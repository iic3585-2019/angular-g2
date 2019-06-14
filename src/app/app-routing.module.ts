import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyPokemonsComponent } from './../app/components/my-pokemons/my-pokemons.component';
import { CatchComponent } from './components/catch/catch.component';

// Components
const routes: Routes = [
  { path: 'myPokemons', component: MyPokemonsComponent },
  { path: 'catch', component: CatchComponent },
  { path: '', redirectTo: '/catch', pathMatch: 'full' },
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
