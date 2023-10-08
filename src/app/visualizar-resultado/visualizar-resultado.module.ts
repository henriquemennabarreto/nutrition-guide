import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VisualizarResultadoPage } from './visualizar-resultado.page';

import { VisualizarResultadoPageRoutingModule } from './visualizar-resultado-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    VisualizarResultadoPageRoutingModule,
    SharedModule
  ],
  declarations: [VisualizarResultadoPage]
})
export class VisualizarResultadoPageModule {}
