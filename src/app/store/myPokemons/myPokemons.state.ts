import { Selector, State, Action, StateContext } from '@ngxs/store';
import { Pokemon } from './../../types/pokemon';
import { Catch } from  './myPokemons.action';

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
  ],
})

export class MyPokemons {
  @Selector()
  static getMyPokemons(state: Pokemon[]) {
    return state;
  }

  @Action(Catch)
  catch(ctx: StateContext<Pokemon[]>, { pokemon }: Catch) {
    const state = ctx.getState();
    ctx.setState([...state, pokemon]);
  }
}