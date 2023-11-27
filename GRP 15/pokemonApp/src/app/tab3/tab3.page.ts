import { Component, OnInit } from '@angular/core';
import { SharedPokemonIdService } from '../services/shared-pokemon-id.service';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  pokemonList: any;

  constructor(private sharedPokemonIdService: SharedPokemonIdService) { }

  ionViewDidEnter() {
    this.pokemonList = this.sharedPokemonIdService.getPokemonList();
    console.log(this.pokemonList)
  }
}