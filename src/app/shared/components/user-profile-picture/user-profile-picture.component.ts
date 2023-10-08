import { Component, EventEmitter, Output } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { ImageOptionsComponent } from '../image-options/image-options.component';

@Component({
  selector: 'app-user-profile-picture',
  templateUrl: './user-profile-picture.component.html',
  styleUrls: ['./user-profile-picture.component.scss'],
})
export class UserProfilePictureComponent {

  @Output() imageChanged = new EventEmitter<string>();

  constructor(private popoverCtrl: PopoverController) {}

  async onClick() {
    const popover = await this.popoverCtrl.create({
      component: ImageOptionsComponent,
      translucent: true
    });

    await popover.present();

    const { data } = await popover.onWillDismiss();
    if (data) {
      this.imageChanged.emit(data.imageSource);
    }
  }
}
