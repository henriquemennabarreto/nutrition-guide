import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { logoutUser } from 'src/app/store/app.actions';

@Component({
  selector: 'app-user-dropdown-menu',
  templateUrl: './user-dropdown-menu.component.html',
  styleUrls: ['./user-dropdown-menu.component.scss'],
})
export class UserDropdownMenuComponent {

  constructor(private store: Store, private router: Router) {}

  onLogout() {
    this.store.dispatch(logoutUser());
    this.router.navigate(['/tabs/autenticar']);
  }
}
