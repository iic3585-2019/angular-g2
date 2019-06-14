import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyPokemonsComponent } from './../app/components/my-pokemons/my-pokemons.component';

const routes: Routes = [
  { path: 'myPokemons', component: MyPokemonsComponent },
  { path: '', redirectTo: '/myPokemons', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
