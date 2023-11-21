import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PokeAPIService {
  constructor(private HttpClient: HttpClient) {}
  getPokeAPIService(id: number = Math.floor(Math.random() * 100)) {
    return this.HttpClient.get('http://pokeapi.co/api/v2/pokemon/$(id)');
  }
}
