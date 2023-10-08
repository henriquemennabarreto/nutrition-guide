import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { logoutUser } from 'src/app/store/app.actions';

@Component({
  selector: 'app-user-dropdown-menu',
  templateUrl: './user-dropdown-menu.component.html',
  styleUrls: ['./user-dropdown-menu.component.scss'],
})
export class UserDropdownMenuComponent {

  constructor(private store: Store) {}

  onLogout() {
    this.store.dispatch(logoutUser());
  }
}
