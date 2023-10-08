import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AutenticarPage } from './autenticar.page';
import { AutenticarPageRoutingModule } from './autenticar-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    AutenticarPageRoutingModule,
    FlexLayoutModule,
    SharedModule
  ],
  declarations: [AutenticarPage]
})
export class AutenticarPageModule {}
