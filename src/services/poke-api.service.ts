import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Chance (https://github.com/chancejs/chancejs)
import Chance from 'chancejs';
const chance = Chance();

// Types
import { Pokemon } from '../types/pokemon';

@Injectable({ providedIn: 'root' })
export class PokeAPIService {
  private BASE_URI = 'https://pokeapi.co/api/v2/';

  constructor(private http: HttpClient) { }

  getRandomPokemon(): Observable<Pokemon> {
    const id = chance.integer({ min: 1, max: 151 });
    const uri = `${this.BASE_URI}/pokemon/${id}/`;

    return this.http.get<Pokemon>(uri);
  }
}
