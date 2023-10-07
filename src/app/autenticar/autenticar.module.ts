import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AutenticarPage } from './autenticar.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { AutenticarPageRoutingModule } from './autenticar-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    AutenticarPageRoutingModule,
    FlexLayoutModule
  ],
  declarations: [AutenticarPage]
})
export class AutenticarPageModule {}
