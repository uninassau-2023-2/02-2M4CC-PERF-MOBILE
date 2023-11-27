import { Component } from '@angular/core';
import { PokeAPIService } from './../services/poke-api.service';
import { ViaCEPService } from './../services/via-cep.service';
import { forkJoin } from 'rxjs';
import { PokemonDataService } from '../services/pokemon-data.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  numberOfAbilitiesTab1: number = 0;
  areaBuscarPokemon: string = '52011210';
  areaBusca: any = {
    bairro: '',
    localidade: '',
    logradouro: '',
    uf: ''
  };
  pokemonData: any = {
    name: '',
    image: '',
    abilities: 0,
    height: 0,
    weight: 0
  };

  constructor(
    private pokeAPIService: PokeAPIService,
    private viaCEPService: ViaCEPService,
    private pokemonDataService: PokemonDataService
  ) {}

  buscarInformacoes() {
    const randomId = Math.floor(Math.random() * 100) + 1;

    forkJoin([
      this.pokeAPIService.getPokeAPIService(randomId),
      this.viaCEPService.getViaCEPService(this.areaBuscarPokemon)
    ]).subscribe(([pokemonResponse, cepResponse]) => {
      const pokemonData = pokemonResponse as any;
      const cepData = cepResponse as any;

      this.pokemonData.name = pokemonData.name.toUpperCase();
      this.pokemonData.image = pokemonData.sprites.other['dream_world'].front_default;
      this.pokemonData.abilities = pokemonData.abilities.length;
      this.pokemonData.height = pokemonData.height;
      this.pokemonData.weight = pokemonData.weight;
      this.pokeAPIService.setData(pokemonData.abilities.length)

      this.areaBusca.logradouro = cepData.logradouro;
      this.areaBusca.bairro = cepData.bairro;
      this.areaBusca.localidade = cepData.localidade;
      this.areaBusca.uf = cepData.uf;

      this.pokemonDataService.capturedPokemons.push({
        name: this.pokemonData.name,
        victories: 0,
        defeats: 0,
        draws: 0,
        image: this.pokemonData.image,
        abilities: this.pokemonData.abilities,
        height: this.pokemonData.height,
        weight: this.pokemonData.weight
      });
    });

    if (this.pokemonDataService.capturedPokemons.length > 0) {
      this.pokemonDataService.arrayIndex += 1
    }
  }
}
