import { Component } from '@angular/core';
import { PokeAPIService } from '../services/poke-api.service';
import { ViaCepService } from '../services/via-cep.service';
import { TabsPage } from '../tabs/tabs.page';

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
    uf: ''
  };
  pokemonList: any[] = [];

  idPokemon: number | undefined;
   
  pokemonAlternativo2: any = {
    name: '',
    sprites: '',
    abilities: '',
    height: '',
    weight: '',
  }

  pokemon: any = {
    name: '',
    sprites: '',
    abilities: '',
    height: '',
    weight: '',
  }

 
  pokemonAlternativo: any = {
    sprites: '', 
    abilities: '',
    height: '',
    weight: '',
  }
  constructor(
    private pokeAPIService: PokeAPIService,
    private viaCEPService: ViaCepService,
    private tabsPage: TabsPage,
  ) {}
buscarPokemon() {
  this.viaCEPService.getViaCEPService(this.areaBuscarPokemon)
  .subscribe((value) => {
    this.areaBusca.logradouro = JSON.parse(JSON.stringify(value)) ['logradouro'];
    this.areaBusca.bairro = ', ' + JSON.parse(JSON.stringify(value)) ['bairro'];
    this.areaBusca.localidade = ' - ' + JSON.parse(JSON.stringify(value)) ['localidade'];
    this.areaBusca.uf = '-' + JSON.parse(JSON.stringify(value)) ['uf'];
  });
  this.pokeAPIService.getPokeAPIService(this.idPokemon)
  .subscribe((value) => {
    this.pokemon.name = JSON.parse(JSON.stringify(value)) ['name'];
    this.pokemon.sprites = JSON.parse(JSON.stringify(value)) ['sprites'];

    const abilitiesArray = JSON.parse(JSON.stringify(value))['abilities'];
    
    this.pokemonAlternativo.abilities = abilitiesArray.length;
    this.pokemonAlternativo.height = JSON.parse(JSON.stringify(value)) ['height'];
    this.pokemonAlternativo.weight = JSON.parse(JSON.stringify(value)) ['weight'];
    this.tabsPage.updateHabilidadeTab1(this.pokemonAlternativo.abilities);
    
    

    this.pokeAPIService.addPokemonData(this.pokemon);
  })
  }
}
