import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisualizarResultadoPage } from './visualizar-resultado.page';

const routes: Routes = [
  {
    path: '',
    component: VisualizarResultadoPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisualizarResultadoPageRoutingModule {}
