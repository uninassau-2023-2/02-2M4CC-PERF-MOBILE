import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ViaCEPService {
  constructor(private HttpClient: HttpClient) {}
  getViaCEPService(cep: string = '52011210') {
    return this.HttpClient.get('http://viacep.com.br/ws/${cep}/json/');
  }
}
