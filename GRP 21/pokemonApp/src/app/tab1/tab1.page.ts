import { Component } from '@angular/core';
import { PokeAPIService } from '../services/poke-api.service';
import { ViaCEPService } from '../services/via-cep.service';
import { GetSetValueService } from '../services/get-set-value.services';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  areaBuscarPokemon: string = '54765115';
  areaBusca: any = {
    bairro: '',
    logradouro: '',
    localidade: '',
    uf: '',
  };
  pokeAttr: any = {
    name: 'bulbasaur',
    height: '7',
    weight: '69',
    abilities: '2',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg'
  }
  constructor(
    private pokeAPIService: PokeAPIService,
    private viaCEPService: ViaCEPService,
    private getSet: GetSetValueService,
  ) { 
    setInterval(() => {
      this.getSet.setValor(this.pokeAttr.abilities)
    }, 100)
  }
  
  buscarPokemon() {
    this.viaCEPService.getViaCEPService(this.areaBuscarPokemon).subscribe((value) => {
      this.areaBusca.logradouro = JSON.parse(JSON.stringify(value))['logradouro'];
      this.areaBusca.bairro = ', ' + JSON.parse(JSON.stringify(value))['bairro'];
      this.areaBusca.localidade = ' - ' + JSON.parse(JSON.stringify(value))['localidade'];
      this.areaBusca.uf = '-' + JSON.parse(JSON.stringify(value))['uf'];
    });
    this.pokeAPIService.getPokeAPIService().subscribe((value) => {
      this.pokeAttr.name = JSON.parse(JSON.stringify(value))['name'];
      this.pokeAttr.height = JSON.parse(JSON.stringify(value))['height'];
      this.pokeAttr.weight = JSON.parse(JSON.stringify(value))['weight'];
      this.pokeAttr.abilities = JSON.parse(JSON.stringify(value))['abilities'].length;
      this.pokeAttr.image = JSON.parse(JSON.stringify(value))['sprites']['other']['dream_world']['front_default'];
    });

    this.getSet.setValor(parseInt(this.pokeAttr.abilities))
  }
}