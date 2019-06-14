import { Component, OnInit } from '@angular/core';

import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import {Pokemon} from './../../types/pokemon';
import { MyPokemons } from 'src/app/store/myPokemons/myPokemons.state';

@Component({
  selector: 'app-my-pokemons',
  templateUrl: './my-pokemons.component.html',
  styleUrls: ['./my-pokemons.component.sass']
})
export class MyPokemonsComponent implements OnInit {

  @Select(MyPokemons.getMyPokemons) myPokemons: Observable<Pokemon[]>;

  constructor() { 
  }

  ngOnInit() {
  }

}
