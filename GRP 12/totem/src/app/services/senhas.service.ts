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
  public senhasChamadas: string[] = [];

  constructor() {}

  somaGeral() {this.senhasGeral++;this.senhasTotal++;}
  somaPrior() {this.senhasPrior++;this.senhasTotal++;}
  somaExame() {this.senhasExame++;this.senhasTotal++;}


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

  }
}
