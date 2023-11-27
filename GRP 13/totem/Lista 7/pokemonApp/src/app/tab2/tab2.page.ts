import { Component } from '@angular/core';
import { PokeAPIService } from './../services/poke-api.service';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  areaBusca: any = {
    nomePokemon: '',
    abilitiesCount: 0,
    height: 0,
    weight: 0,
    imagemPokemon: '',
  };

  empate: boolean = false; // Variável para rastrear empate

  constructor(
    private pokeAPIService: PokeAPIService,
    public photoService: PhotoService
  ) {}

  ionViewDidEnter() {
    // Chama automaticamente a busca por Pokémon ao entrar na página
    this.buscarPokemon();
  }

  async buscarPokemon() {
    const randomPokemonId = Math.floor(Math.random() * 100);
    await this.pokeAPIService.getPokeAPIService(randomPokemonId).toPromise().then((pokemonData: any) => {
      this.areaBusca.nomePokemon = pokemonData.name;
      this.areaBusca.abilitiesCount = pokemonData.abilities.length;
      this.areaBusca.height = pokemonData.height;
      this.areaBusca.weight = pokemonData.weight;
      this.areaBusca.imagemPokemon = pokemonData.sprites.other.dream_world.front_default;
  
      console.log('Habilidades do Pokémon da API:', this.areaBusca.abilitiesCount);
      console.log('Habilidades do Pokémon da câmera:', this.photoService.getPokemonData()?.abilitiesCount);
  
      this.empate = this.areaBusca.abilitiesCount === this.photoService.getPokemonData()?.abilitiesCount;
      console.log('Empate:', this.empate);
    });
  }

  async addPhotoToGallery() {
    await this.photoService.addNewToGallery();
    // Atualize a variável empate aqui, se necessário
    this.empate = this.areaBusca.abilitiesCount === this.photoService.getPokemonData()?.abilitiesCount;
  }
}
