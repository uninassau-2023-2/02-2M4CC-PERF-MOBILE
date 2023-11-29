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

  ResultadoBatalha: string = '';
  
  HabilidadeTab1: string = '';

  ListaPokemon: any[] = [];

  pokemonAlternativo2: any = {
    name: '',
    sprites: '',
    abilities: '',
    height: '',
    weight: '',
  }

  constructor(
    private pokeAPIService: PokeAPIService,
    public photoService: PhotoService,
    private tabsPage: TabsPage) { }
      

      ionViewWillEnter() {
      const pokemonAleatorioID =  Math.floor(Math.random() * 100)  

        this.pokeAPIService.getPokeAPIService(pokemonAleatorioID)
          .subscribe((value) => {
            this.pokemonAlternativo2.name = JSON.parse(JSON.stringify(value)) ['name'];
            this.pokemonAlternativo2.sprites = JSON.parse(JSON.stringify(value)) ['sprites'];

            const abilitiesArray = JSON.parse(JSON.stringify(value))['abilities'];
            this.pokemonAlternativo2.abilities = abilitiesArray.length;

            this.pokemonAlternativo2.height = JSON.parse(JSON.stringify(value)) ['height'];
            this.pokemonAlternativo2.weight = JSON.parse(JSON.stringify(value)) ['weight'];

            this.initiateBattle(this.HabilidadeTab1, this.pokemonAlternativo2);
        })
        this.HabilidadeTab1 = this.tabsPage.HabilidadeTab1;     
      }

      initiateBattle(HabilidadeTab1: any, pokemonAlternativo2: any) {

        if (HabilidadeTab1 < pokemonAlternativo2.abilities) {
          this.ResultadoBatalha = 'Ganhou'
         
          this.pokeAPIService.defeats++;
      
        } else if (HabilidadeTab1 > pokemonAlternativo2.abilities) {
          this.ResultadoBatalha = 'Perdeu';
          
          this.pokeAPIService.victories++;
        } else {
          this.ResultadoBatalha = 'Empate';
          
          this.pokeAPIService.draws++;
      }
    }

    getStyleForResultadoBatalha() {
      let styles = {};
  
      switch (this.ResultadoBatalha) {
        case 'Ganhou':
          styles = { color: 'green' };
          break;
        case 'Perdeu':
          styles = { color: 'red' };
          break;
        case 'Empate':
          styles = { color: 'orange' };
          break;
      }
  
      return styles;
    }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }
}
