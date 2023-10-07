import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutenticarPage } from './autenticar.page';

const routes: Routes = [
  {
    path: '',
    component: AutenticarPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutenticarPageRoutingModule {}
