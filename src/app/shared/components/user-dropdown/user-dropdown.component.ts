import { Component, EventEmitter, Output, ElementRef, ViewChild } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { UserDropdownMenuComponent } from '../user-dropdown-menu/user-dropdown-menu.component';

@Component({
  selector: 'app-user-dropdown',
  templateUrl: './user-dropdown.component.html',
  styleUrls: ['./user-dropdown.component.scss']
})
export class UserDropdownComponent {

  @Output() logout = new EventEmitter<void>();
  @ViewChild('avatar', { static: false }) avatar?: ElementRef;

  constructor(private popoverCtrl: PopoverController) {}

  async presentPopover(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: UserDropdownMenuComponent,
      event: ev,
      translucent: true
    });
    await popover.present();
    return popover.onWillDismiss();
  }

  onAvatarClick(ev: any) {
    this.presentPopover(ev);
  }
}
