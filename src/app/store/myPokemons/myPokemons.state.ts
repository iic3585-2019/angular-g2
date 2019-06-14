import {Action, Selector, State, StateContext} from '@ngxs/store';
import { Pokemon } from './../../types/pokemon';

@State<Pokemon[]>({
  name: 'myPokemons',
  defaults: [],
})

export class MyPokemons {
}