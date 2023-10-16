import { Component } from '@angular/core';
import { SenhasService } from '../services/senhas.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  
  dataEGuiches: any[] = []
  inputNovaSenha: string = '';

  constructor(public senhasService: SenhasService) {}

  generateRandomNumberToGuiche() {
    return Math.floor(Math.random() * 10) + 1;
  }

  gerarSenhaSG() {
    this.senhasService.novaSenha('SG')
    const data = new Date().toLocaleString();
    const guiche = this.generateRandomNumberToGuiche()

    this.dataEGuiches.push({data, guiche})
  }

  gerarSenhaSP() {
    this.senhasService.novaSenha('SP')
    const data = new Date().toLocaleString();
    const guiche = this.generateRandomNumberToGuiche()

    this.dataEGuiches.push({data, guiche})
  }

  gerarSenhaSE() {
    this.senhasService.novaSenha('SE')
    const data = new Date().toLocaleString();
    const guiche = this.generateRandomNumberToGuiche()

    this.dataEGuiches.push({data, guiche})
  }

}

