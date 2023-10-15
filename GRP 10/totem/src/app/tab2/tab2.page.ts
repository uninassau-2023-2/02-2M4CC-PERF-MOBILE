import { Component } from '@angular/core';
import { SenhasService } from '../services/senhas.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {

  constructor(public senhasService: SenhasService) {}

  chamarProxSenha() {
    let senhaChamada: string = '';
    this.senhasService.guiche = Math.floor(Math.random() * 10) + 1;
   
    if (this.senhasService.senhasArray.SP.length > 0) {
      senhaChamada = this.senhasService.senhasArray.SP.shift();
    } else if (this.senhasService.senhasArray.SE.length > 0) {
      senhaChamada = this.senhasService.senhasArray.SE.shift();
    } else if (this.senhasService.senhasArray.SG.length > 0) {
      senhaChamada = this.senhasService.senhasArray.SG.shift();
    }

    if (senhaChamada !== '') {
      this.senhasService.senhasChamadas.push(senhaChamada);
      this.senhasService.senhaAtual = senhaChamada; // Atualiza senha chamada
      this.senhasService.todasSenhasChamadas.push(senhaChamada);
    }

          //Remove senha chamada
     const index = this.senhasService.senhasChamadas.indexOf(this.senhasService.senhaAtual);
    if (index !== -1) {
    this.senhasService.senhasChamadas.splice(index, 1);
    }
}
}
