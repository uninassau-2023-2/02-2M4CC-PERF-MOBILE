import { Component, OnInit } from '@angular/core';
import { PokeAPIService } from '../services/poke-api.service';
import { TabsPage } from '../tabs/tabs.page';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  pokemonList: any[] = [];

  constructor(public pokeAPIService: PokeAPIService,
    private tabsPage: TabsPage) {}

  ngOnInit(){
    this.pokemonList = this.pokeAPIService.getPokemonList();
  }
}


