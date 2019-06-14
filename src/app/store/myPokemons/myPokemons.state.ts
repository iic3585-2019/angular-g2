import {Action, Selector, State, StateContext} from '@ngxs/store';
import { Pokemon } from './../../types/pokemon';

@State<Pokemon[]>({
  name: 'myPokemons',
  defaults: [{
    id: 1,
    name: 'asas',
    imageURI: 'asas',
  }],
})

export class MyPokemons {
  @Selector()
  static getMyPokemons(state: Pokemon[]) {
    return state;
  }
}