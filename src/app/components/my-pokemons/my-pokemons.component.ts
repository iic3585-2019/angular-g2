import { Component, OnInit } from '@angular/core';

import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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
    console.log(this.myPokemons);
  }

  ngOnInit() {
  }

}
