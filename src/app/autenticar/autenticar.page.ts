import { Component } from '@angular/core';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { Store } from '@ngrx/store';
import { IAppState } from '../store/app.reducer';
import * as Actions from '../store/app.actions';
import { Router } from '@angular/router';


@Component({
  selector: 'app-autenticar',
  templateUrl: 'autenticar.page.html',
  styleUrls: ['autenticar.page.scss']
})
export class AutenticarPage {

  constructor(
    private store: Store<IAppState>,
    private router: Router
  ) {}

  async loginWithGoogle() {
    let gUser = await GoogleAuth.signIn();
    if(gUser?.email && gUser?.authentication?.accessToken) {
      let user = {
        name: gUser.name,
        email: gUser.email,
        accessToken: gUser.authentication.accessToken,
        profilePicture: gUser.imageUrl
      };
      this.store.dispatch(Actions.setUser({ user }));
      this.router.navigate(['/tabs/perfil-usuario']);
    }
  }
}
