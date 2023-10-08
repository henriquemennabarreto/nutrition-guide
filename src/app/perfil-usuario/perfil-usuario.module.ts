import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PerfilUsuarioPage } from './perfil-usuario.page';

import { PerfilUsuarioPageRoutingModule } from './perfil-usuario-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    PerfilUsuarioPageRoutingModule,
    SharedModule
  ],
  declarations: [PerfilUsuarioPage]
})
export class PerfilUsuarioPageModule {}
