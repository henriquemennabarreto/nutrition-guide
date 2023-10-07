import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PerfilUsuarioPage } from './perfil-usuario.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { PerfilUsuarioPageRoutingModule } from './perfil-usuario-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    PerfilUsuarioPageRoutingModule
  ],
  declarations: [PerfilUsuarioPage]
})
export class PerfilUsuarioPageModule {}
