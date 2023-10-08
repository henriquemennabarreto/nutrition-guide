import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAvatarComponent } from './components/user-avatar/user-avatar.component';
import { UserService } from './services/user.service';
import { PlanoService } from './services/plano.service';
import { UserDropdownComponent } from './components/user-dropdown/user-dropdown.component';
import { UserDropdownMenuComponent } from './components/user-dropdown-menu/user-dropdown-menu.component';
import { ImageOptionsComponent } from './components/image-options/image-options.component';
import { UserProfilePictureComponent } from './components/user-profile-picture/user-profile-picture.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
  ],
  declarations: [
    UserAvatarComponent,
    UserDropdownComponent,
    UserDropdownMenuComponent,
    ImageOptionsComponent,
    UserProfilePictureComponent,
  ],
  providers: [
    UserService,
    PlanoService
  ],
  exports: [
    UserAvatarComponent,
    UserDropdownComponent,
    UserDropdownMenuComponent,
    ImageOptionsComponent,
    UserProfilePictureComponent,
  ]
})
export class SharedModule {}
