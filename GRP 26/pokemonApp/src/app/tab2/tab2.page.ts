import { Component } from '@angular/core';
import { PokeAPIService } from '../services/poke-api.service';
import { PhotoService } from '../services/photo.service';
import { PokemonDataService } from '../services/pokemon-data.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  randomPokemon: any = {};
  randomPokemonImage: string = '';
  numberOfAbilitiesTab2: number = 0; // Habilidades do Pokémon da Tab2
  numberOfAbilitiesTab1: number = 0; // Habilidades do Pokémon da Tab1
  pokemonStatus: string = ''; // Estado do Pokémon (Ganhou, Perdeu, Empate)

  constructor(private pokeAPIService: PokeAPIService, public photoService: PhotoService, private pokeDataService: PokemonDataService) {}

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }
  
  ionViewWillEnter() {
    this.numberOfAbilitiesTab1 = this.pokeAPIService.getData()
    this.loadRandomPokemon();
  }

  loadRandomPokemon() {
    this.pokeAPIService.getPokeAPIService().subscribe((data: any) => {
      this.randomPokemon = data;
      this.randomPokemonImage = data.sprites.other['dream_world'].front_default;
      this.numberOfAbilitiesTab2 = data.abilities.length;
      this.compareAbilities();
    });
  }

  compareAbilities() {
    let index = this.pokeDataService.arrayIndex;
  
    if (this.numberOfAbilitiesTab2 === this.numberOfAbilitiesTab1) {
      this.pokemonStatus = 'Empate';
      this.pokeDataService.capturedPokemons[index].draws += 1;
    } else if (this.numberOfAbilitiesTab2 > this.numberOfAbilitiesTab1) {
      this.pokemonStatus = 'Ganhou';
      this.pokeDataService.capturedPokemons[index].defeats += 1;
    } else {
      this.pokemonStatus = 'Perdeu';
      this.pokeDataService.capturedPokemons[index].victories += 1;
    }
  }
}
