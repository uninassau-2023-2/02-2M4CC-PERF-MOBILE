import { Component } from '@angular/core';
import { SenhasService } from '../services/senhas.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  private tipoSenhaAtual: string = 'SP';
  public teste: number = 0;

  constructor(public senhasService: SenhasService) {}

  chamarProxSenha() {
    let senhaChamada: string = '';

    if (this.senhasService.senhasArray[this.tipoSenhaAtual].length > 0) {
      senhaChamada = this.senhasService.senhasArray[this.tipoSenhaAtual].shift();
      this.senhasService.senhasChamadas.push(senhaChamada);
    }


    if (this.tipoSenhaAtual === 'SP') {
      this.tipoSenhaAtual = 'SE';
    } else if (this.tipoSenhaAtual === 'SE') {
      this.tipoSenhaAtual = 'SG';
    } else {
      this.tipoSenhaAtual = 'SP';
    }

  }
}