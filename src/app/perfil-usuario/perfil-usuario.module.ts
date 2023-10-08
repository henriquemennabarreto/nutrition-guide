import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PerfilUsuarioPage } from './perfil-usuario.page';

import { PerfilUsuarioPageRoutingModule } from './perfil-usuario-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    PerfilUsuarioPageRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  declarations: [PerfilUsuarioPage]
})
export class PerfilUsuarioPageModule {}
