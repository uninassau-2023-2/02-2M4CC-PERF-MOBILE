import { Component, OnInit } from '@angular/core';
import { PokeAPIService } from '../services/poke-api.service';
import { ViaCEPService } from '../services/via-cep.service';
import { SharedPokemonIdService } from '../services/shared-pokemon-id.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  areaBuscarPokemon: string = '52011210';
  areaBusca: any = {
    bairro: '',
    localidade: '',
    logradouro: '',
    uf: '',
  };

  pokemon: any = {
    id: 0,
    name: '',
    abilities: [],
    height: 0,
    weight: 0,
    img: '',
    vitorias: 0,
    empates: 1,
    derrotas: 0
  };

  numberOfAbilitiesTab1: any;
  pokemonIdTab1: any;

  constructor(
    private pokeAPIService: PokeAPIService,
    private viaCEPService: ViaCEPService,
    private sharedPokemonIdService: SharedPokemonIdService
  ) {}

  ngOnInit(): void {
    this.buscarPokemon()
  }

  buscarPokemon() {
    this.viaCEPService.getViaCEPService(this.areaBuscarPokemon)
    .subscribe((value) => {
      this.areaBusca.logradouro = JSON.parse(JSON.stringify(value)) ['logradouro'];
      this.areaBusca.bairro = ', ' + JSON.parse(JSON.stringify(value)) ['bairro'];
      this.areaBusca.localidade = ' - ' + JSON.parse(JSON.stringify(value)) ['localidade'];
      this.areaBusca.uf = '-' + JSON.parse(JSON.stringify(value)) ['uf'];
    });

    this.pokemon.id = Math.floor(Math.random() * 100);
    this.pokeAPIService.getPokeAPIService(this.pokemon.id).subscribe((value) => {
      this.pokemon.id = JSON.parse(JSON.stringify(value))['id'];
      this.pokemon.name = JSON.parse(JSON.stringify(value))['name'];
      this.pokemon.abilities = JSON.parse(JSON.stringify(value))['abilities'].length;
      this.pokemon.weight = JSON.parse(JSON.stringify(value))['weight'];
      this.pokemon.height = JSON.parse(JSON.stringify(value))['height'];
      this.pokemon.img = JSON.parse(JSON.stringify(value))['sprites']['other']['dream_world']['front_default'];
      this.sharedPokemonIdService.setAbilities(this.pokemon.abilities);
      this.sharedPokemonIdService.addPokemon(this.pokemon);
    });
  };
}
