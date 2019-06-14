import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// Chance (https://github.com/chancejs/chancejs)
import Chance from 'chance';
const chance = Chance();

// Types
import { Pokemon } from '../types/pokemon';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class PokeAPIService {
  private BASE_URI = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) { }

  getRandomPokemon(): Observable<Pokemon> {
    const id = chance.integer({ min: 1, max: 151 });
    const uri = `${this.BASE_URI}/pokemon/${id}/`;

    const response = this.http.get<any>(uri, httpOptions)
      .pipe(map(pokemon => ({
        id,
        name: pokemon.name,
        imageURI: pokemon.sprites.front_default,
      })));

    return response
  }
}
