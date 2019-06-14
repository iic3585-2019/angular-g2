import { Component, OnInit } from '@angular/core';

// Services
import { PokeAPIService } from '../../services/poke-api.service';

// Types
import { Pokemon } from '../../types/pokemon';

import { Store } from '@ngxs/store';

import { Catch } from './../../store/myPokemons/myPokemons.action';

@Component({
  selector: 'app-catch',
  templateUrl: './catch.component.html',
  styleUrls: ['./catch.component.sass']
})
export class CatchComponent implements OnInit {
  pokemon: Pokemon | null = null
  message: String = null

  constructor(private pokeAPIService: PokeAPIService, private store: Store) { }

  ngOnInit() {
    this.pokeAPIService.getRandomPokemon()
      .subscribe(pokemon => this.pokemon = pokemon);
  }

  catch(pokemon: Pokemon) {
    this.store.dispatch(new Catch(pokemon));
  }
}
