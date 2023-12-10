import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  tab1Abilities: string = '';
  constructor() {}

  updateTab1Abilities(abilities: string) {
    this.tab1Abilities = abilities;
  }
}
