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
  };
  pokemon: any = this.pokeAPIService.id;
  idPokemon: any = {
    nome: '',
    height: '',
    weight: '',
    abilities: '',
    sprite: ''
  }

  constructor(public pokeAPIService: PokeAPIService, public viaCEPService: ViaCEPService) { }

  buscarPokemon() {
    this.viaCEPService.getViaCEPService(this.areaBuscarPokemon).subscribe((value) => {
      this.areaBusca.logradouro = JSON.parse(JSON.stringify(value))['logradouro'];
      this.areaBusca.bairro = JSON.parse(JSON.stringify(value))['bairro'];
      this.areaBusca.localidade = JSON.parse(JSON.stringify(value))['localidade'];
      this.areaBusca.uf = JSON.parse(JSON.stringify(value))['uf'];

      this.areaBusca.logradouro += ', ';
      this.areaBusca.bairro += ' - ';
      this.areaBusca.localidade += '-';



    });
    // Chama o serviço do PokeAPI após obter os dados do CEP
    this.pokeAPIService.getPokeAPIService(this.pokemon).subscribe((value) => {
      this.idPokemon.nome = JSON.parse(JSON.stringify(value))['name'];
      this.idPokemon.height = JSON.parse(JSON.stringify(value))['height'];
      this.idPokemon.weight = JSON.parse(JSON.stringify(value))['weight'];
      this.idPokemon.abilities = JSON.parse(JSON.stringify(value))['abilities'];
      this.idPokemon.sprite = JSON.parse(JSON.stringify(value))['id'];
    });

  }
}