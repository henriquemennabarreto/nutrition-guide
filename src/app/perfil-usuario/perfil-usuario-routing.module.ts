import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilUsuarioPage } from './perfil-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilUsuarioPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfilUsuarioPageRoutingModule {}
