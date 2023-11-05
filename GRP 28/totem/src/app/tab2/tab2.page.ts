import { Component } from '@angular/core';
import { SenhasService } from '../services/senhas.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  senhaChamada: string = 'Nenhuma senha disponível';

  constructor(public senhasService: SenhasService) {}

  chamarProximaSenha() {
    const tipoSenhas = ['SP', 'SE', 'SG'];

    for (const tipoSenha of tipoSenhas) {
      if (this.senhasService.senhasArray[tipoSenha].length > 0) {
        const proximaSenha = this.senhasService.senhasArray[tipoSenha].shift();
        if (proximaSenha !== undefined) {
          this.senhaChamada = proximaSenha;
          return;
        }
      }
    }

    this.senhaChamada = 'Nenhuma senha disponível';
  }
}