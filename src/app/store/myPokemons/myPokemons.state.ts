import { Selector, State } from '@ngxs/store';
import { Pokemon } from './../../types/pokemon';

@State<Pokemon[]>({
  name: 'myPokemons',
  defaults: 
  [
    {
      id: 25,
      name: 'pikachu',
      imageURI: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    },
    {
      id: 25,
      name: 'pikachu',
      imageURI: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    },
    {
      id: 25,
      name: 'pikachu',
      imageURI: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    },
    {
      id: 25,
      name: 'pikachu',
      imageURI: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    },
    {
      id: 25,
      name: 'pikachu',
      imageURI: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    },
    {
      id: 25,
      name: 'pikachu',
      imageURI: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    },
  ],
})

export class MyPokemons {
  @Selector()
  static getMyPokemons(state: Pokemon[]) {
    return state;
  }
}