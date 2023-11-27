import { Component } from '@angular/core';
import { PokeAPIService } from '../services/poke-api.service';
import { ViaCEPService } from '../services/via-cep.service';
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

  pokemonid: number | undefined;

  pokemon: any = {
    name: '',
    sprites: '',
    abilities: '',
    height: '',
    weight: '',
  }
  pokemon1: any = {
    abilities: '',
  }
  constructor(
    private pokeAPIService: PokeAPIService,
    private viaCEPService: ViaCEPService,
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
  this.pokeAPIService.getPokeAPIService(this.pokemonid)
  .subscribe((value) => {
    this.pokemon.name = JSON.parse(JSON.stringify(value)) ['name'];
    this.pokemon.sprites = JSON.parse(JSON.stringify(value)) ['sprites'];

    const abilitiesArray = JSON.parse(JSON.stringify(value))['abilities'];
    this.pokemon.abilities = abilitiesArray.map((ability: any) => ability.ability.name).join(', ');
    this.pokemon1.abilities = abilitiesArray.length;
    this.tabsPage.updateTab1Abilities(this.pokemon1.abilities);

    this.pokemon.height = JSON.parse(JSON.stringify(value)) ['height'];
    this.pokemon.weight = JSON.parse(JSON.stringify(value)) ['weight'];

    this.pokeAPIService.addPokemonData(this.pokemon);
  })
  }
}