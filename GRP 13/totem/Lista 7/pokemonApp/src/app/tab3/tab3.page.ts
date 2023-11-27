import { Component } from '@angular/core';
import { PokeAPIService } from './../services/poke-api.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  pokemon1: any = {};
  pokemon2: any = {};
  pokemon1Result: string = '';  
  pokemon2Result: string = '';  

  constructor(private pokeAPIService: PokeAPIService) {
    this.getRandomPokemonForColumns();
  }

  getRandomPokemonForColumns() {
    const randomPokemonId = Math.floor(Math.random() * 100);
    this.getPokemonData(randomPokemonId).then((pokemonData) => {
      this.pokemon1 = pokemonData;
      this.pokemon2 = { ...pokemonData }; // Cria uma cópia dos dados do Pokémon para a segunda coluna
    });
  }

  private async getPokemonData(pokemonId: number): Promise<any> {
    return this.pokeAPIService.getPokeAPIService(pokemonId).toPromise();
  }
}
