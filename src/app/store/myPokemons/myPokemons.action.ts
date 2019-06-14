import { Pokemon } from './../../types/pokemon';

export class AddPokemon {
  static readonly type = '[Pokemon] Add Pokemon';
  constructor(public pokemon: Pokemon) {}
}