import { Component } from '@angular/core';
import { GetSetValueService } from '../services/get-set-value.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private getSet: GetSetValueService) { }

  public pokemons: any = this.getSet.pokemons;

}
