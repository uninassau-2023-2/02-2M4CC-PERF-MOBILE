import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SenhasService {
  public senhasGeral: number = 0;
  public senhasPrior: number = 0;
  public senhasExame: number = 0;
  public senhasTotal: number = 0;
  public senhasArray: any = [];
  public inputNovaSenha: string = '';
  public TMGeral: number = 0;
  public TMPrior: number = 0;
  public TMExame: number = 0;
  public senhasChamadas: string[] = [];

  constructor() {}

  //somas
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

  // Calcula tempo de demora
  calcularDemora(tipoSenha: string): number {
    if (tipoSenha === 'SP') {
      const min = 10; // 15 minutos - 5 minutos
      const max = 20; // 15 minutos + 5 minutos
      return Math.floor(Math.random() * (max - min + 1)) + min;
    } else if (tipoSenha === 'SE') {
      const percentage = Math.random();
      if (percentage <= 0.05) {
        return 5; // 5 minutos para 5% dos SA
      } else {
        return 1; // 1 minuto para 95% dos SA
      }
    } else {
      const min = 2; // 5 minutos - 3 minutos
      const max = 8; // 5 minutos + 3 minutos
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  }

  // Calcula tempo médio de atendimento
  calcularTempoMedio() {
    if (this.senhasGeral > 0) {
      this.TMGeral = Math.round(
        this.senhasArray.SG.reduce((sum: number, senha: string) => {
          return sum + this.calcularDemora('SG');
        }, 0) / this.senhasGeral
      );
    }

    if (this.senhasPrior > 0) {
      this.TMPrior = Math.round(
        this.senhasArray.SP.reduce((sum: number, senha: string) => {
          return sum + this.calcularDemora('SP');
        }, 0) / this.senhasPrior
      );
    }

    if (this.senhasExame > 0) {
      this.TMExame = Math.round(
        this.senhasArray.SE.reduce((sum: number, senha: string) => {
          return sum + this.calcularDemora('SE');
        }, 0) / this.senhasExame
      );
    }
  }

  // Emite nova senha formatada
  novaSenha(tipoSenha: string = '') {
    var year = new Date().getFullYear().toString().substring(2, 4);
    var month = (new Date().getMonth() + 1).toString().padStart(2, '0');
    var day = new Date().getDate().toString().padStart(2, '0');
    let contador: number;
    let senha: string = '';

    // SENHA GERAL
    if (tipoSenha == 'SG') {
      this.somaGeral();
      contador = this.senhasGeral;
      senha = `${year}${month}${day}-${tipoSenha}${contador
        .toString()
        .padStart(2, '0')}`;
      if (!this.senhasArray['SG']) {
        this.senhasArray['SG'] = [];
      }
      this.senhasArray['SG'].push(senha);

      // SENHA PRIORITÁRIA
    } else if (tipoSenha == 'SP') {
      this.somaPrior();
      contador = this.senhasPrior;
      senha = `${year}${month}${day}-${tipoSenha}${contador
        .toString()
        .padStart(2, '0')}`;
      if (!this.senhasArray['SP']) {
        this.senhasArray['SP'] = [];
      }
      this.senhasArray['SP'].push(senha);

      // SENHA EXAME
    } else if (tipoSenha == 'SE') {
      this.somaExame();
      contador = this.senhasExame;
      senha = `${year}${month}${day}-${tipoSenha}${contador
        .toString()
        .padStart(2, '0')}`;
      if (!this.senhasArray['SE']) {
        this.senhasArray['SE'] = [];
      }
      this.senhasArray['SE'].push(senha);
    }

    this.inputNovaSenha = senha;
    console.log(this.senhasArray);
    this.calcularTempoMedio();
  }
}
