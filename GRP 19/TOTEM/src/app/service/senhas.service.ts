import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SenhasService {
  public senhasGeral: number = 0;
  public senhasPrior: number = 0;
  public senhasExame: number = 0;
  public senhasTotal: number = 0;
  public senhasArray: any = {
    SG: [],
    SP: [],
    SE: []
  };
  public inputNovaSenha: string = '';

  constructor() { }

  somaGeral(): void {
    //etapa 10 sem void
    this.senhasGeral++;
    this.senhasTotal++;
  }

  somaPrior(): void {
    this.senhasPrior++;
    this.senhasTotal++;

    //senhas da fila prioritária
  }

  somaExame(): void {
    this.senhasExame++;
    this.senhasTotal++;

    // fila de exames
  }

  novaSenha(tipoSenha : string = '') {

    if (tipoSenha == 'SG') {

      this.somaGeral();
      this.inputNovaSenha =
        new Date().getFullYear().toString().substring(2, 4) +
        new Date().getMonth().toString().padStart(2, '0') +
        new Date().getDate().toString().padStart(2, '0') +
        '-' +
        tipoSenha +
        (this.senhasArray['SG'].length + 1).toString().padStart(2, '0');
      this.senhasArray.SG.push(this.inputNovaSenha);
    } else if (tipoSenha == 'SP') {
      this.somaPrior();
      this.inputNovaSenha =
        new Date().getFullYear().toString().substring(2, 4) +
        new Date().getMonth().toString().padStart(2, '0') +
        new Date().getDate().toString().padStart(2, '0') +
        '-' +
        tipoSenha +
        (this.senhasArray['SP'].length + 1).toString().padStart(2, '0');
      this.senhasArray.SP.push(this.inputNovaSenha);
    } else if (tipoSenha == 'SE') {
      this.somaExame();
      this.inputNovaSenha =
        new Date().getFullYear().toString().substring(2, 4) +
        new Date().getMonth().toString().padStart(2, '0') +
        new Date().getDate().toString().padStart(2, '0') +
        '-' +
        tipoSenha +
        (this.senhasArray['SE'].length + 1).toString().padStart(2, '0');
      this.senhasArray.SE.push(this.inputNovaSenha);
    }
    console.log(this.senhasArray);

  }
}