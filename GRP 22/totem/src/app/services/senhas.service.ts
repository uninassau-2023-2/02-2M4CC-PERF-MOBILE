import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SenhasService {
  public senhasGeral: number = 0;
  public senhasPrioridade: number = 0;
  public senhasExames: number = 0;
  public senhasTotais: number = 0;
  public senhasArray: any = [];
  public inputNovaSenha: string = '';
  public TempoIntermediarioTudo: number = 0;
  public TempoIntermediarioPrioridade: number = 0;
  public TempoIntermediarioExame: number = 0;
  public senhasChamadas: string[] = [];

  constructor() {}

  //somas
  somaGeral() {
    this.senhasGeral++;
    this.senhasTotais++;
  }
  somaPrior() {
    this.senhasPrioridade++;
    this.senhasTotais++;
  }
  somaExame() {
    this.senhasExames++;
    this.senhasTotais++;
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
      this.TempoIntermediarioTudo = Math.round(
        this.senhasArray.SG.reduce((sum: number, senha: string) => {
          return sum + this.calcularDemora('SG');
        }, 0) / this.senhasGeral
      );
    }

    if (this.senhasPrioridade > 0) {
      this.TempoIntermediarioPrioridade = Math.round(
        this.senhasArray.SP.reduce((sum: number, senha: string) => {
          return sum + this.calcularDemora('SP');
        }, 0) / this.senhasPrioridade
      );
    }

    if (this.senhasExames > 0) {
      this.TempoIntermediarioExame = Math.round(
        this.senhasArray.SE.reduce((sum: number, senha: string) => {
          return sum + this.calcularDemora('SE');
        }, 0) / this.senhasExames
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
      contador = this.senhasPrioridade;
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
      contador = this.senhasExames;
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
