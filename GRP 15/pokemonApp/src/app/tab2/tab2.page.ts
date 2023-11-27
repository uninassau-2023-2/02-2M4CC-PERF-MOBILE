import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { PokeAPIService } from '../services/poke-api.service';
import { SharedPokemonIdService } from '../services/shared-pokemon-id.service'; 

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  pokemon: any = {
    id: 0,
    name: '',
    PokemonId: [],
    height: 0,
    weight: 0,
    img: '',
    vitorias: 0,
    empates: 1,
    derrotas: 0
  };

  battleResult: string = '';

  empate: boolean = false;
  ganhou: boolean = false;
  perdeu: boolean = false;
  

  constructor(
    public photoService: PhotoService,
    private pokeAPIService: PokeAPIService,
    private sharedPokemonIdService: SharedPokemonIdService
  ) {}
   
  ngOnInit() {
    this.loadRandomPokemon();
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  };
  ionViewDidEnter(){
    this.loadRandomPokemon();
  }

  loadRandomPokemon() {
    this.pokemon.id = Math.floor(Math.random() * 100);

    this.sharedPokemonIdService.getAbilities().subscribe((numeroHabilidadesTab1) => {
      this.pokeAPIService.getPokeAPIService(this.pokemon.id).subscribe((value) => {
        this.pokemon.id = JSON.parse(JSON.stringify(value))['id'];
        this.pokemon.name = JSON.parse(JSON.stringify(value))['name'];
        this.pokemon.abilities = JSON.parse(JSON.stringify(value))['abilities'].length;
        this.pokemon.weight = JSON.parse(JSON.stringify(value))['weight'];
        this.pokemon.height = JSON.parse(JSON.stringify(value))['height'];
        this.pokemon.img = JSON.parse(JSON.stringify(value))['sprites']['front_default'];

        this.batalhar(numeroHabilidadesTab1);
      });
    });
  }

    private batalhar(numeroHabilidadesTab1: number) {
      const numeroHabilidadesTab2 = this.pokemon.abilities;
  
      this.empate = false;
      this.ganhou = false;
      this.perdeu = false;
  
      if (this.sharedPokemonIdService.getPokemonList().length < 1) {
      } else {
        const lastPokemon = this.sharedPokemonIdService.getPokemonList()[this.sharedPokemonIdService.getPokemonList().length - 1];
      
        if (numeroHabilidadesTab1 === numeroHabilidadesTab2) {
          this.empate = true;
          this.battleResult = 'EMPATE';
          lastPokemon.empate++;
        } else if (numeroHabilidadesTab1 < numeroHabilidadesTab2) {
          this.ganhou = true;
          this.battleResult = 'GANHOU';
          lastPokemon.derrota++;
        } else {
          this.perdeu = true;
          this.battleResult = 'PERDEU';
          lastPokemon.vitoria++;
        }
      }
    }    
}


