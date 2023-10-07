import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VisualizarResultadoPage } from './visualizar-resultado.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { VisualizarResultadoPageRoutingModule } from './visualizar-resultado-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    VisualizarResultadoPageRoutingModule
  ],
  declarations: [VisualizarResultadoPage]
})
export class VisualizarResultadoPageModule {}
