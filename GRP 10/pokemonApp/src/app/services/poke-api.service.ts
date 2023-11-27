import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeAPIService {
  private pokemonList: any[] = [];

  constructor(private httpClient: HttpClient) { }

  getPokeAPIService(id: number = Math.floor(Math.random() * 100)) {
    return this.httpClient.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }

  addPokemonData(pokemon: any) {
    // Create a new object with individual information for each Pokémon
    const newPokemon = {
      name: pokemon.name,
      sprites: pokemon.sprites,
      image: pokemon.sprites.other['dream_world'].front_default,
      abilities: pokemon.abilities,
      height: pokemon.height,
      weight: pokemon.weight,
      victories: 0,
      defeats: 0,
      draws: 0
    };

    // Add the new Pokémon to the list
    this.pokemonList.push(newPokemon);
  }

  getPokemonList() {
    return this.pokemonList;
  }

  updateVictories(pokemon: any) {
    pokemon.victories++;
  }

  updateDefeats(pokemon: any) {
    pokemon.defeats++;
  }

  updateDraws(pokemon: any) {
    pokemon.draws++;
  }

  updateBattleResult(pokemon: any, result: string) {
    switch (result) {
      case 'victories':
        this.updateVictories(pokemon);
        break;
      case 'defeats':
        this.updateDefeats(pokemon);
        break;
      case 'draws':
        this.updateDraws(pokemon);
        break;
      default:
        console.error('Invalid battle result type');
        break;
    }
  }
}