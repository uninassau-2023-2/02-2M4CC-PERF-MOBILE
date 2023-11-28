import { Component, OnInit } from '@angular/core';
import { PokeAPIService } from '../services/poke-api.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  pokemonList: any[] = [];
  
  constructor(public pokeAPIService: PokeAPIService) {}

  ngOnInit(){
    this.pokemonList = this.pokeAPIService.getPokemonList();
  }
}

