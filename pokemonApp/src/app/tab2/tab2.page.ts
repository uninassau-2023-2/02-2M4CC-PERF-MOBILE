import { Component } from '@angular/core';
import { PokeAPIService } from '../services/poke-api.service';
import { PhotoService } from '../services/photo.service';
import { TabsPage } from '../tabs/tabs.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  tab1Abilities: string = '';
  pokemon2: any = {
    name: '',
    sprites: '',
    abilities: '',
    height: '',
    weight: '',
  }

  constructor(
    private pokeAPIService: PokeAPIService,
    public photoService: PhotoService,
    private tabsPage: TabsPage) {

      const pokemonAleatorioID =  Math.floor(Math.random() * 100)  

        this.pokeAPIService.getPokeAPIService(pokemonAleatorioID)
          .subscribe((value) => {
            this.pokemon2.name = JSON.parse(JSON.stringify(value)) ['name'];
            this.pokemon2.sprites = JSON.parse(JSON.stringify(value)) ['sprites'];

            const abilitiesArray = JSON.parse(JSON.stringify(value))['abilities'];
            this.pokemon2.abilities = abilitiesArray.length;

            this.pokemon2.height = JSON.parse(JSON.stringify(value)) ['height'];
            this.pokemon2.weight = JSON.parse(JSON.stringify(value)) ['weight'];
        })
        this.tab1Abilities = this.tabsPage.tab1Abilities;;     
    
    }
    toNumber(value: string): number {
      return +value; // Converte a string em um número
    }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }
}
