import { Component, OnInit } from '@angular/core';

import { Pokemon } from './../../types/pokemon';

@Component({
  selector: 'app-my-pokemons',
  templateUrl: './my-pokemons.component.html',
  styleUrls: ['./my-pokemons.component.sass']
})
export class MyPokemonsComponent implements OnInit {

  myPokemons: Pokemon[];

  constructor() { }

  ngOnInit() {
  }

}
