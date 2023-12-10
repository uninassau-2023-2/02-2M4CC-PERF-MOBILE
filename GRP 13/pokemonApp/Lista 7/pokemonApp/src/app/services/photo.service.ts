import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { PokeAPIService } from './poke-api.service';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  private pokemonData: any; // Armazene os dados do Pokémon aqui

  constructor(private pokeApiService: PokeAPIService) {}

  public async addNewToGallery(): Promise<any> {
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });

    // Obtenha dados de um Pokémon aleatório da PokeAPI
    const randomPokemonId = Math.floor(Math.random() * 100); // Existem 898 Pokémon até a geração 8
    this.pokemonData = await this.pokeApiService.getPokeAPIService(randomPokemonId).toPromise();

    // Exiba os dados do Pokémon (por exemplo, no console)
    console.log('Dados do Pokémon (Camera):', this.pokemonData);

    // Agora você pode usar os dados do Pokémon conforme necessário
    return this.pokemonData;
  }

  public getPokemonData() {
    return this.pokemonData;
  }
}
