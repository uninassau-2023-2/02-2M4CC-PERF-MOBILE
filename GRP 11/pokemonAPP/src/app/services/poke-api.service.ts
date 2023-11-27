import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeAPIService {
  constructor(private httpClient: HttpClient) {}
  
  private pokemonList: any[] = [];

  victories: number = 0;
  defeats: number = 0;
  draws: number = 0;

  getPokeAPIService (id: number = Math.floor(Math.random() * 100)) {
    return this.httpClient.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
  }

  addPokemonData(pokemon: any) {
    this.pokemonList.push(pokemon);
  }

  getPokemonList() {
    return this.pokemonList;
  }

}
