import { Injectable } from '@angular/core';
import { SharedPokemonIdService } from './shared-pokemon-id.service';

@Injectable({
  providedIn: 'root'
})
export class PokeInfoService {
  constructor(private sharedPokemonIdService: SharedPokemonIdService) {}

setpokemonIdTab1(pokemonId: any) {
  this.sharedPokemonIdService.setPokemonId(pokemonId);
}

getpokemonIdTab1() {
  return this.sharedPokemonIdService.getPokemonId();
}
}
