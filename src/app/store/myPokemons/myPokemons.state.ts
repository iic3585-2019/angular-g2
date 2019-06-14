import { Selector, State, Action, StateContext } from '@ngxs/store';
import { Pokemon } from './../../types/pokemon';
import { Catch } from  './myPokemons.action';

@State<Pokemon[]>({
  name: 'myPokemons',
  defaults: [],
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