import { Component } from '@angular/core';
import { PokeAPIService } from './../services/poke-api.service';
import { ViaCEPService } from './../services/via-cep.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  areaBuscarPokemon: string = '52011210';
  areaBusca: any = {
    bairro: '',
    localidade: '',
    logradouro: '',
    uf: '',
    nomePokemon: '',
    abilitiesCount: 0,
    height: 0,
    weight: 0,
    imagemPokemon: '',
  };

  constructor(
    private pokeAPIService: PokeAPIService,
    private viaCEPService: ViaCEPService
  ) {}
  

  buscarPokemon() {
    this.viaCEPService.getViaCEPService(this.areaBuscarPokemon).subscribe((value) => {
      this.areaBusca.logradouro = JSON.parse(JSON.stringify(value))['logradouro'];
      this.areaBusca.bairro = ', ' + JSON.parse(JSON.stringify(value))['bairro'];
      this.areaBusca.localidade = ' - ' + JSON.parse(JSON.stringify(value))['localidade'];
      this.areaBusca.uf = '-' + JSON.parse(JSON.stringify(value))['uf'];
    });

    const randomPokemonId = Math.floor(Math.random() * 100) + 1;

    this.pokeAPIService.getPokeAPIService(randomPokemonId).subscribe((pokemonData: any) => {
    
      this.areaBusca.nomePokemon = pokemonData.name;
      this.areaBusca.abilitiesCount = pokemonData.abilities.length;
      this.areaBusca.height = pokemonData.height;
      this.areaBusca.weight = pokemonData.weight;
      this.areaBusca.imagemPokemon = pokemonData.sprites.other.dream_world.front_default;

      console.log('Dados do Pokémon:', this.areaBusca);
    });
  }
}
