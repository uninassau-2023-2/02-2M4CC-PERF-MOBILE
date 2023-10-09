import { Component } from '@angular/core';
import { SenhasService } from '../services/senhas.service';
import { Tab2Page } from '../tab2/tab2.page';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  constructor(public senhasService: SenhasService) {}

}
