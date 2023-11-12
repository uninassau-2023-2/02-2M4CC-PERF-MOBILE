import { Component } from '@angular/core';
import { PokeAPIService } from '../services/poke-api.service';
import { PhotoService } from '../services/photo.service';

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

  constructor(private pokeAPIService: PokeAPIService, public photoService: PhotoService) {}

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }
  
  ionViewWillEnter() {
    this.numberOfAbilitiesTab1 = this.pokeAPIService.getData()
    this.loadRandomPokemon();
    this.compareAbilities();
  }

  loadRandomPokemon() {
    this.pokeAPIService.getPokeAPIService().subscribe((data: any) => {
      this.randomPokemon = data;
      this.randomPokemonImage = data.sprites.other['dream_world'].front_default;
      this.numberOfAbilitiesTab2 = data.abilities.length;
      console.log(this.numberOfAbilitiesTab1)
      this.compareAbilities();
    });
  }

  compareAbilities() {
    if (this.numberOfAbilitiesTab2 === this.numberOfAbilitiesTab1) {
      this.pokemonStatus = 'Empate';
    } else if (this.numberOfAbilitiesTab2 > this.numberOfAbilitiesTab1) {
      this.pokemonStatus = 'Ganhou';
    } else {
      this.pokemonStatus = 'Perdeu';
    }
  }
}
