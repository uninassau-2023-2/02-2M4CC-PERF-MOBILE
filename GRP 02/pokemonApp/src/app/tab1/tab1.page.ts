import { Component } from '@angular/core';
import { PokeAPIService } from '../services/poke-api.service';
import { ViaCEPService } from '../services/via-cep.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  areaBuscarPokemon: string = '55011210';
  areaBusca: any = {
    bairro: '',
    locaidade: '',
    logradouro: '',
    uf: '',
  };
  constructor(
    private PokeAPIService: PokeAPIService,
    private ViaCEPService: ViaCEPService
  ) {}
  buscarPokemon() {
    this.ViaCEPService.getViaCEPService(this.areaBuscarPokemon).subscribe(
      (value) => {
        this.areaBusca.logradouro = JSON.parse(JSON.stringify(value))[
          'logradouro'
        ];
        this.areaBusca.bairro = JSON.parse(JSON.stringify(value))['bairro'];
        this.areaBusca.localidade = JSON.parse(JSON.stringify(value))[
          'localidade'
        ];
        this.areaBusca.uf = JSON.parse(JSON.stringify(value))['uf'];
      }
    );
    this.PokeAPIService.getPokeAPIService();
  }
}
