import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SenhasService {
  public senhasGeral: number = 0;
  public senhasPrior: number = 0;
  public senhasExame: number = 0;
  public senhasTotal: number = 0;

  public inputNovaSenha: string = '';

  public senhaAtual: string = '';

  chamaSG: boolean = false;
  chamaSP: boolean = true;
  chamaSE: boolean = false;

  indicieSG: number = 0;
  indicieSP: number = 0;
  indicieSE: number = 0;

  public mediaDoTempo: number = 0;

  public segundos: number = 0;

  public atendimentoSenhas: number = 0;

  public guiche: number = 0;

  public senhasArray: any = {
    'SG': [],
    'SP': [],
    'SE': []
  };
  constructor() { }

  somaGeral() { this.senhasGeral++; this.senhasTotal++; }

  somaPrior() { this.senhasPrior++; this.senhasTotal++; }

  somaExame() { this.senhasExame++; this.senhasTotal++; }


  novaSenha(tipoSenha: string = '') {

    if (tipoSenha == 'SG') {
      this.somaGeral();
      this.inputNovaSenha =
        new Date().getFullYear().toString().substring(2, 4) +
        new Date().getMonth().toString().padStart(2, '0') +
        new Date().getDay().toString().padStart(2, '0') +
        '-' +
        tipoSenha +
        (this.senhasArray['SG'].length + 1).toString().padStart(2, '0');
      this.senhasArray.SG.push(this.inputNovaSenha);
    } else if (tipoSenha == 'SP') {
      this.somaPrior();
      this.inputNovaSenha =
        new Date().getFullYear().toString().substring(2, 4) +
        new Date().getMonth().toString().padStart(2, '0') +
        new Date().getDay().toString().padStart(2, '0') +
        '-' +
        tipoSenha +
        (this.senhasArray['SP'].length + 1).toString().padStart(2, '0');
      this.senhasArray.SP.push(this.inputNovaSenha);
    } else if (tipoSenha == 'SE') {
      this.somaExame();
      this.inputNovaSenha =
        new Date().getFullYear().toString().substring(2, 4) +
        new Date().getMonth().toString().padStart(2, '0') +
        new Date().getDay().toString().padStart(2, '0') +
        '-' +
        tipoSenha +
        (this.senhasArray['SE'].length + 1).toString().padStart(2, '0');
      this.senhasArray.SE.push(this.inputNovaSenha);
    }
    console.log(this.senhasArray.SG[0])
  }

  public guiche1: string = '';
  public guiche2: string = '';
  public guiche3: string = '';
  public guiche4: string = '';

  atenderSenha(guiche: number) {
    let aleatorio = Math.random();
    let aleatorioSeg = Math.floor(Math.random() * (59 - 30)) + 30;

    let randomIndex = Math.floor(aleatorio * 3);

    let opcoesSP = [10, 15, 20];
    let opcoesSG = [2, 5, 8];

    let valorSP = opcoesSP[randomIndex];
    let valorSG = opcoesSG[randomIndex];

    if (this.senhasArray.SP[this.indicieSP] == null) {
      this.chamaSE = true;
      this.chamaSG = true;
    } else if(this.senhasArray.SG[this.indicieSG] == null && this.senhasArray.SE[this.indicieSE] == null) {
      this.chamaSP = true;
    }
    if(this.senhasArray.SP[this.indicieSP] != null && this.chamaSP) {
      this.senhaAtual = this.senhasArray.SP[this.indicieSP];
      this.indicieSP++;
      this.chamaSP = false;
      this.chamaSE = true;
      this.chamaSG = true;
      this.atendimentoSenhas++;
      this.mediaDoTempo += valorSP;
    } else {

    if(this.senhasArray.SE[this.indicieSE] != null && this.chamaSE) {
      this.senhaAtual = this.senhasArray.SE[this.indicieSE];
      this.indicieSE++;
      this.chamaSP = true;
      this.chamaSE = false;
      this.chamaSG = false;
      this.atendimentoSenhas++;
      this.segundos += aleatorioSeg;
    } else if (this.senhasArray.SG[this.indicieSG] && this.chamaSG) {
      this.senhaAtual = this.senhasArray.SG[this.indicieSG];
      this.indicieSG++;
      this.chamaSP = true;
      this.chamaSE = false;
      this.chamaSG = false;
      this.atendimentoSenhas++;
      this.mediaDoTempo += valorSG;
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
    return this.segundos;
  }

  segundosEmMinutos() {
    if (this.segundos >= 60) {
      this.segundos -= 60;
      this.segundos += 1;
    }
  }


}
  


