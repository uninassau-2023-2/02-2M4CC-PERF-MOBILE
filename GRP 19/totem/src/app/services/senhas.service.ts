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
  
  public senhasArray: { [key: string]: string[] } = { SG: [], SP: [], SE: [] };
  
  public tempoMedioAtendimento: { [key: string]: number } = { SG: 0.05, SP: 0.010 };
  
  constructor() { }

  somaGeral(): void {
    this.senhasGeral++;
    this.senhasTotal++;
  }

  somaPrior(): void {
    this.senhasPrior++;
    this.senhasTotal++;
  }

  somaExame(): void {
    this.senhasExame++;
    this.senhasTotal++;
  }

  novaSenha(tipoSenha : string = '') {
    let dataAtual = new Date();
    let ano = dataAtual.getFullYear().toString().substring(2,4);
    let mes = dataAtual.getMonth().toString().padStart(2, '0');
    let dia = dataAtual.getDate().toString().padStart(2, '0');
  
    if (tipoSenha == 'SG') {
      this.somaGeral();
      this.inputNovaSenha = ano + mes + dia + '-' + tipoSenha + (this.senhasArray['SG'].length+1).toString().padStart(2,'0');
      this.senhasArray['SG'].push(this.inputNovaSenha); 
    } else if (tipoSenha == 'SP') {
      this.somaPrior();
      this.inputNovaSenha = ano + mes + dia + '-' + tipoSenha + (this.senhasArray['SP'].length+1).toString().padStart(2,'0');
      this.senhasArray['SP'].push(this.inputNovaSenha); 
    } else if (tipoSenha == 'SE') {
      this.somaExame();
      this.inputNovaSenha = ano + mes + dia + '-' + tipoSenha + (this.senhasArray['SE'].length+1).toString().padStart(2,'0');
      this.senhasArray['SE'].push(this.inputNovaSenha);
    }
    
    console.log(this.senhasArray);
  }

  chamarProximoNaFila(): string {
    let proximaSenha = '';
    if (this.senhasArray['SP'].length > 0) {
      proximaSenha = this.senhasArray['SP'][0];
    } else if (this.senhasArray['SG'].length > 0) {
      proximaSenha = this.senhasArray['SG'][0];
    } else if (this.senhasArray['SE'].length > 0) {
      proximaSenha = this.senhasArray['SE'][0];
    }
    
    console.log('Próxima senha:', proximaSenha);
    return proximaSenha;
  }

concluirAtendimento(tipoSenha: string): void {
    if (tipoSenha == 'SP' && this.senhasArray['SP'].length > 0) {
      this.senhasArray['SP'].shift();
    } else if (tipoSenha == 'SG' && this.senhasArray['SG'].length > 0) {
      this.senhasArray['SG'].shift();
    } else if (tipoSenha == 'SE' && this.senhasArray['SE'].length > 0) {
      this.senhasArray['SE'].shift();
    }

    console.log('Atendimento concluído para a senha', tipoSenha);
  }

calcularTempoMedioAtendimento(tipoSenha: string): number {
    return this.senhasArray[tipoSenha].length * this.tempoMedioAtendimento[tipoSenha];
}
}


