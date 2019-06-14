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

  constructor(private pokeAPIService: PokeAPIService, private store: Store) { }

  ngOnInit() {
    this.pokeAPIService.getRandomPokemon()
      .subscribe(pokemon => this.pokemon = pokemon);
  }

  catch(pokemon: Pokemon) {
    const isCatch = chance.integer({ min: 0, max: 1 });
    if(isCatch){
      console.log("capturado!");
      this.store.dispatch(new Catch(pokemon));
    } else{
      console.log("Lo siento :C!");
    }
  }
}
