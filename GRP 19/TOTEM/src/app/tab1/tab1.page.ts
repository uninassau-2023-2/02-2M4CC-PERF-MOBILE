import { Component, Injectable } from '@angular/core';
import { SenhasService } from '../services/senhas.service';//12
//11
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
 // inputNovaSenha: string = ''; //13  // 3 da lista 4 apagar linha 
 

  constructor( public senhasService: SenhasService) { 
    this.senhasService=senhasService;
  }
}
//14


