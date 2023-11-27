// tab3.module.ts ou app.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Tab3PageRoutingModule } from './tab3-routing.module';
import { Tab3Page } from './tab3.page';
import { PokeAPIService } from './../services/poke-api.service'; // Verifique o caminho real

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    Tab3PageRoutingModule
  ],
  declarations: [Tab3Page],
  providers: [PokeAPIService] // Verifique se o serviço está registrado aqui
})
export class Tab3PageModule {}
