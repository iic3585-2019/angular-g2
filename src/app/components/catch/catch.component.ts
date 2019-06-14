import { Component, OnInit } from '@angular/core';

// Services
import { PokeAPIService } from '../../services/poke-api.service';

// Types
import { Pokemon } from '../../types/pokemon';

@Component({
  selector: 'app-catch',
  templateUrl: './catch.component.html',
  styleUrls: ['./catch.component.sass']
})
export class CatchComponent implements OnInit {
  pokemon: Pokemon | null = null

  constructor(private pokeAPIService: PokeAPIService) { }

  ngOnInit() {
    this.pokeAPIService.getRandomPokemon()
      .subscribe(pokemon => this.pokemon = pokemon);
  }
}
