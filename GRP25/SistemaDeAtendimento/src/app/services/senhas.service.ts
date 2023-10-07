import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SenhasService {

  constructor() {}

  public senhasGeral: number = 0;
  public senhasPrior: number = 0;
  public senhasExame: number = 0;
  public senhasTotal: number = 0;

  tipoSenha: string = '';

  public inputNovaSenha: string = '';
  public senhasArray: any = [];

  public tmpGeral: number = 0;
  public tmpPrior: number = 0;
  public tmpExame: number = 0;

  public senhasAtendidas: any = [];

  somaGeral() {
    this.senhasGeral++;
    this.senhasTotal++;
  }
  somaPrior() {
    this.senhasPrior++;
    this.senhasTotal++;
  }
  somaExame() {
    this.senhasExame++;
    this.senhasTotal++;
  }


  calcDemora(tipoSenha: string): number{
    if(tipoSenha === 'SP'){
      const min = 10;
      const max = 20;
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }else if (tipoSenha === 'SE'){
      const percent = Math.random();
      if(percent <= 0.05){
        return 5;
      }else{
        return 1;
      }
    }else {
      const min = 2;
      const max = 8;
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  }

  calcTempoMedio(){
    if(this.senhasGeral > 0){
        this.tmpGeral = Math.round(this.senhasArray.SG.reduce((sum: number, senha: string) => {
          return sum + this.calcDemora('SG');
        }, 0) / this.senhasGeral
      );
    }

    if(this.senhasPrior > 0){
      this.tmpPrior = Math.round(
        this.senhasArray.SP.reduce((sum: number, senha: string) => {
          return sum + this.calcDemora('SP');
        }, 0) / this.senhasPrior
      )
    }

    if(this.senhasExame > 0) {
      this.tmpExame = Math.round(
        this.senhasArray.SE.reduce((sum: number, senha: string) => {
          return sum + this.calcDemora('SE');
        }, 0) / this.senhasExame
      )
    }
  }



  novaSenha(tipoSenha: string = '') {
    let contador: number;

    if (tipoSenha == 'SG') {
      this.somaGeral();
      contador = this.senhasGeral;
      this.inputNovaSenha = new Date().getFullYear().toString().substring(2, 4) +
              (new Date().getMonth() + 1).toString().padStart(2, '0') +
              new Date().getDate().toString().padStart(2, '0') +
              '-' +
              tipoSenha +
              contador.toString().padStart(2, '0');
      if (!this.senhasArray['SG']) {
        this.senhasArray['SG'] = [];
      }
      this.senhasArray['SG'].push(this.inputNovaSenha);

    } else if (tipoSenha == 'SP') {
      this.somaPrior();
      contador = this.senhasPrior;
      this.inputNovaSenha = new Date().getFullYear().toString().substring(2, 4) +
              (new Date().getMonth() + 1).toString().padStart(2, '0') +
              new Date().getDate().toString().padStart(2, '0') +
              '-' +
              tipoSenha +
              contador.toString().padStart(2, '0');
      if (!this.senhasArray['SP']) {
        this.senhasArray['SP'] = [];
      }
      this.senhasArray['SP'].push(this.inputNovaSenha);

    } else if (tipoSenha == 'SE') {
      this.somaExame();
      contador = this.senhasExame;
      this.inputNovaSenha = new Date().getFullYear().toString().substring(2, 4) +
              (new Date().getMonth() + 1).toString().padStart(2, '0') +
              new Date().getDate().toString().padStart(2, '0') +
              '-' +
              tipoSenha +
              contador.toString().padStart(2, '0');
      if (!this.senhasArray['SE']) {
        this.senhasArray['SE'] = [];
      }
      this.senhasArray['SE'].push(this.inputNovaSenha);
    }

    console.log(this.senhasArray);
    this.calcTempoMedio();
  }
}
