import { Component } from '@angular/core';
import { SenhasService } from '../services/senhas.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})

export class Tab2Page {
  public alertButtons = ['OK'];
  public alertInputs = [
    {
      label: 'Senha Prioritária',
      type: 'radio',
      value: 'red',
    },
    {
      label: 'Senha Geral',
      type: 'radio',
      value: 'blue',
    },
    {
      label: 'Retirada de Exame',
      type: 'radio',
      value: 'green',
    },
  ];

  public senhasService: SenhasService;

  constructor(senhasService: SenhasService) { //14
    this.senhasService = senhasService;
  }

}