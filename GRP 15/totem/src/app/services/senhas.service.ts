import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SenhasService{

  public senhasGeral: number = 0;
  public senhasPrior: number = 0;
  public senhasExame: number = 0;
  public senhasTotal: number = 0;
  public inputNovaSenha: string = '';
  public senhaAtual: string = '';

  vezSG: boolean = false;
  vezSP: boolean = true;
  vezSE: boolean = false;

  indicieSP: number = 0;
  indicieSE: number = 0;
  indicieSG: number = 0;

  public tempoMedio: number = 0;
  public _tempoSegundos: number = 0;
  public senhasAtendidas: number = 0;
  public guiche: number = 0;
  public senhasArray: any = {
    'SG': [],
    'SP': [],
    'SE': []
  };

  public guiche1: string ='';
  public guiche2: string ='';
  public guiche3: string ='';
  public guiche4: string ='';


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
  tipoSenha: string = ''
  novaSenha (tipoSenha: string = '') {
    if (tipoSenha == 'SG') {
      this.somaGeral () ;
      this.inputNovaSenha = 
      new Date () .getFullYear () .toString () .substring (2, 4) +
      new Date () .getMonth () .toString () .padStart (2, '0') +
      new Date() .getDay () .toString () .padStart (2, '0') +
      '-' +
      tipoSenha +
      (this.senhasArray['SG'].length + 1) .toString () .padStart (2, '0') ;
  this.senhasArray.SG.push (this.inputNovaSenha) ;
} else if (tipoSenha == 'SP') {
 this.somaPrior() ;
 this.inputNovaSenha =
      new Date () .getFullYear () .toString () .substring (2, 4) +
      new Date () .getMonth () .toString () .padStart (2, '0') +
      new Date () .getDay () .toString () .padStart (2, '0') +
      '-' +
      tipoSenha +
      (this.senhasArray ['SP'].length + 1) .toString () .padStart (2, '0') ;
this.senhasArray.SP.push (this.inputNovaSenha) ;
} else if (tipoSenha == 'SE') {
 this.somaExame () ;
 this.inputNovaSenha =
       new Date () .getFullYear () .toString () .substring (2, 4) +
       new Date () .getMonth () .toString () .padStart (2, '0') +
       new Date () .getDay () .toString () .padStart (2, '0') + 
'-' +
tipoSenha +
(this.senhasArray['SE'].length + 1) .toString () .padStart (2, '0') ;
this.senhasArray.SE.push (this.inputNovaSenha) ;
}
console.log (this.senhasArray) ;
}

  constructor() { }
  atenderSenha(guiche: number){

    let valorAleatorio = Math.random();
    let valorAleatorioSegundos = Math.floor(Math.random() * (59 - 30)) + 30;
  
    let randomIndex = Math.floor(valorAleatorio * 3);
  
    let opcoesSP = [10, 15, 20];
    let opcoesSG = [2, 5, 8]
  
    let valorSP = opcoesSP[randomIndex];
    let valorSG = opcoesSG[randomIndex];
  
      if (this.senhasArray.SP[this.indicieSP] == null) {
        this.vezSE = true;
        this.vezSG = true;
      } else if(this.senhasArray.SG[this.indicieSG] == null && this.senhasArray.SE[this.indicieSE] == null) {
        this.vezSP = true;
      }
      if(this.senhasArray.SP[this.indicieSP] != null && this.vezSP) {
        this.senhaAtual = this.senhasArray.SP[this.indicieSP];
        this.indicieSP++;
        this.vezSP = false;
        this.vezSE = true;
        this.vezSG = true;
        this.senhasAtendidas++;
        this.tempoMedio += valorSP;
      } else {
  
      if(this.senhasArray.SE[this.indicieSE] != null && this.vezSE) {
        this.senhaAtual = this.senhasArray.SE[this.indicieSE];
        this.indicieSE++;
        this.vezSP = true;
        this.vezSE = false;
        this.vezSG = false;
        this.senhasAtendidas++;
        this._tempoSegundos += valorAleatorioSegundos;
      } else if (this.senhasArray.SG[this.indicieSG] && this.vezSG) {
        this.senhaAtual = this.senhasArray.SG[this.indicieSG];
        this.indicieSG++;
        this.vezSP = true;
        this.vezSE = false;
        this.vezSG = false;
        this.senhasAtendidas++;
        this.tempoMedio += valorSG;
      } else {
        this.senhaAtual = 'Não há ninguém na fila';
      }
      }
      if(guiche == 1) {
        this.guiche1 = this.senhaAtual;
      } else if (guiche == 2) {
        this.guiche2 = this.senhaAtual;
      } else if (guiche == 3) {
        this.guiche3 = this.senhaAtual;
      } else if (guiche == 4) {
        this.guiche4 = this.senhaAtual;
      }
      if(this.senhaAtual != 'Não há ninguém na fila') {
      this.guiche = guiche;
      this.ultimaSenhaAtendidas(this.senhaAtual);
      }
    }
  
    public ultimasSenhas: string[] = [];
  
    ultimaSenhaAtendidas(tipoSenha: string='') {
      this.senhaAtual += ' - Guichê ' + this.guiche
      this.ultimasSenhas.unshift(this.senhaAtual);
      if (this.ultimasSenhas.length > 5) {
        this.ultimasSenhas.pop();
      }
    }
  
    get tempoSegundos(): number {
      this.segundosEmMinutos();
      return this._tempoSegundos;
    }
  
    segundosEmMinutos() {
      if (this._tempoSegundos >= 60) {
        this._tempoSegundos -= 60;
        this.tempoMedio += 1;
      }
    }

}