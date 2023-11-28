import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  HabilidadeTab1: string = '';
  constructor() {}

  updateHabilidadeTab1(abilities: string) {
    this.HabilidadeTab1 = abilities;
  }
}
