import { Component } from '@angular/core';
import { SenhasService } from '../services/senhas.service';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public senhaAtual: string = '';
  constructor(private senhasService: SenhasService) {}
  public chamarProximo(): void {
    console.log('Método chamarProximo foi chamado');
    this.senhaAtual = this.senhasService.chamarProximoNaFila();
    console.log('Senha atual :', this.senhaAtual);
  }
}

