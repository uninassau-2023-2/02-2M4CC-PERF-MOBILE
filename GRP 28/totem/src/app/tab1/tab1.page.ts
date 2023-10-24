import { Component} from '@angular/core';
import { SenhasService } from '../services/senhas.service';//12
//11
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public senhasService: SenhasService;

  constructor(senhasService: SenhasService) { //14
    this.senhasService = senhasService;
  }
}

