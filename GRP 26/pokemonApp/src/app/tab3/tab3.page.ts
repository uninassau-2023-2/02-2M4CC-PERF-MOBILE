import { Component, OnInit } from '@angular/core';
import { PokemonDataService } from '../services/pokemon-data.service';
import { PokeAPIService } from '../services/poke-api.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  constructor(public pokemonDataService: PokemonDataService, public pokemonApiService: PokeAPIService) {}

  ngOnInit() {
    // Nenhuma chamada de API aqui, pois já temos os dados capturados
  }
}
