import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonDataService {
  capturedPokemons: any[] = [];
  arrayIndex: number = this.capturedPokemons.length

  constructor() { }
}
