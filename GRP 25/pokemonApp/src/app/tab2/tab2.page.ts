import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { PokeAPIService } from '../services/poke-api.service';
import { GetSetValueService } from '../services/get-set-value.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private photoService: PhotoService, private pokeAPIService: PokeAPIService, private getSet: GetSetValueService) {

  }

  color = "";
  mensagem = "";
  teste = this.getSet.getValor()

  pokeAttr: any = {
    name: '',
    height: '',
    weight: '',
    abilities: '',
    image: ''
  }

  num1: number = 0
  num2: number = 0

  init() {
    this.pokeAPIService.getPokeAPIService().subscribe((value) => {
      this.pokeAttr.name = JSON.parse(JSON.stringify(value))['name'];
      this.pokeAttr.height = JSON.parse(JSON.stringify(value))['height'];
      this.pokeAttr.weight = JSON.parse(JSON.stringify(value))['weight'];
      this.pokeAttr.abilities = JSON.parse(JSON.stringify(value))['abilities'].length;
      this.pokeAttr.image = JSON.parse(JSON.stringify(value))['sprites']['other']['dream_world']['front_default'];
      this.verify();
    });
  }

  ionViewWillEnter() {
    this.init()
    console.log(this.getSet.pokemons)
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

  verify() {
    this.num1 = parseInt(this.pokeAttr.abilities)
    this.num2 = this.getSet.getValor()

    if (this.num1 == this.num2) {
      this.color = "yellow";
      this.mensagem = "EMPATE";
      this.getSet.pokemons[this.getSet.lastPokemon - 1].empate++
    } else if (this.num1 > this.num2) {
      this.color = "red";
      this.mensagem = "GANHOU"
      this.getSet.pokemons[this.getSet.lastPokemon - 1].derrota++
    } else {
      this.color = "green";
      this.mensagem = "PERDEU"
      this.getSet.pokemons[this.getSet.lastPokemon - 1].vitoria++
    }
  }

}
