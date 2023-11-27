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

  battleResult: string = '';
  
  tab1Abilities: string = '';

  pokemonList: any[] = [];

  pokemon2: any = {
    name: '',
    sprites: '',
    abilities: '',
    height: '',
    weight: '',
  }

  pokemon: any = {
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
            this.pokemon2.name = JSON.parse(JSON.stringify(value)) ['name'];
            this.pokemon2.sprites = JSON.parse(JSON.stringify(value)) ['sprites'];
            this.pokemon2.image = this.pokemon2.sprites.other['dream_world'].front_default;

            const abilitiesArray = JSON.parse(JSON.stringify(value))['abilities'];
            this.pokemon2.abilities = abilitiesArray.length;

            this.pokemon2.height = JSON.parse(JSON.stringify(value)) ['height'];
            this.pokemon2.weight = JSON.parse(JSON.stringify(value)) ['weight'];

            this.IniciarBatalha(this.tab1Abilities, this.pokemon2, this.pokemon);
        })
        this.tab1Abilities = this.tabsPage.tab1Abilities;     
      }

      IniciarBatalha(tab1Abilities: any, pokemon2: any, pokemon: any) {
  if (tab1Abilities < pokemon2.abilities) {
    this.battleResult = 'Você perdeu!';
    this.pokeAPIService.updateBattleResult(pokemon, 'defeats');
  } else if (tab1Abilities > pokemon2.abilities) {
    this.battleResult = 'Você ganhou!';
    this.pokeAPIService.updateBattleResult(pokemon, 'victories');
  } else {
    this.battleResult = 'Empate';
    this.pokeAPIService.updateBattleResult(pokemon, 'draws');
  }
}

    MudarCor() {
      let styles = {};
  
      switch (this.battleResult) {
        case 'Você perdeu!':
          styles = { color: 'red' };
          break;
        case 'Você ganhou!':
          styles = { color: 'green' };
          break;
        case 'Empate':
          styles = { color: 'yellow' };
          break;
      }
  
      return styles;
    }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }
}