import { Component, OnInit } from '@angular/core';

// Services
import { PokeAPIService } from '../../services/poke-api.service';

// Types
import { Pokemon } from '../../types/pokemon';

import { Store } from '@ngxs/store';

import { Catch } from './../../store/myPokemons/myPokemons.action';

import Chance from 'chance';
const chance = Chance();

@Component({
  selector: 'app-catch',
  templateUrl: './catch.component.html',
  styleUrls: ['./catch.component.sass']
})
export class CatchComponent implements OnInit {
  pokemon: Pokemon | null = null
  failed: number = 0;

  constructor(private pokeAPIService: PokeAPIService, private store: Store) { }

  ngOnInit() {
    this.pokeAPIService.getRandomPokemon()
      .subscribe(pokemon => this.pokemon = pokemon);
  }

  catch(pokemon: Pokemon) {
    let isCatch = chance.weighted([true, false], [1, 3]);
    if (pokemon.id === 144 || pokemon.id === 145 || pokemon.id === 146 || pokemon.id === 150 || pokemon.id === 151){
      isCatch = chance.weighted([true, false], [1, 6]);
    }
    if(isCatch){
      console.log("capturado!");
      this.failed = 0;
      this.store.dispatch(new Catch(pokemon));
      this.pokeAPIService.getRandomPokemon()
      .subscribe(pokemon => this.pokemon = pokemon);
    } else{
      this.failed += 1;
      console.log("Lo siento :C!");
      if(this.failed === 3){
        this.pokeAPIService.getRandomPokemon()
      .subscribe(pokemon => this.pokemon = pokemon);
      }
    }
  }
}
