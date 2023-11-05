# lista4 mobile


lista 3 em senhas.services.ts

(import { Injectable } from '@angular/core';

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
)
