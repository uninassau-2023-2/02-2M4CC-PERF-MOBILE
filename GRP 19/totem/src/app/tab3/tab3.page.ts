import { Component } from '@angular/core';
import { SenhasService } from '../services/senhas.service';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public senhasService: SenhasService;

  constructor(senhasService:SenhasService) {
  this.senhasService=senhasService;

  }

}