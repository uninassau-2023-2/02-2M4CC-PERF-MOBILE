import { Component } from '@angular/core';
import { SenhasService } from '../services/senhas.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public senhasService: SenhasService) {}

  chamarSenha(){
    let senhaChamada: string = '';

    if(this.senhasService.senhasSPEmEspera > 0){
      senhaChamada = this.senhasService.senhasArray.SP.shift();
      if(senhaChamada !== ''){
          this.senhasService.senhasAtendidasSP.push(senhaChamada);
      }
      this.senhasService.senhasSPEmEspera--;
    }else if(this.senhasService.senhasSEEmEspera > 0){
      senhaChamada = this.senhasService.senhasArray.SE.shift();
      if(senhaChamada !== ''){
          this.senhasService.senhasAtendidasSE.push(senhaChamada);
      }
      this.senhasService.senhasSEEmEspera--;
    }else if(this.senhasService.senhasSGEmEspera > 0){
      senhaChamada = this.senhasService.senhasArray.SG.shift();
      if(senhaChamada !== ''){
          this.senhasService.senhasAtendidasSG.push(senhaChamada);
      }
      this.senhasService.senhasSGEmEspera--;
    }

    console.log(this.senhasService.senhasAtendidasSE)
    console.log(this.senhasService.senhasAtendidasSP)
    console.log(this.senhasService.senhasAtendidasSG)
  }

}
