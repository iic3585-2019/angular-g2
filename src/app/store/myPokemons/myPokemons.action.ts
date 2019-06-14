import { Pokemon } from './../../types/pokemon';

export class Catch {
  static readonly type = '[Pokemon[]] Catch';
  constructor(public pokemon: Pokemon) {}
}