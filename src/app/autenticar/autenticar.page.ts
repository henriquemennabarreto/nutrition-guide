import { Component } from '@angular/core';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-autenticar',
  templateUrl: 'autenticar.page.html',
  styleUrls: ['autenticar.page.scss']
})
export class AutenticarPage {

  constructor(
    private store: Store
  ) {}

  async loginWithGoogle() {
    let gUser = await GoogleAuth.signIn();
    console.log(gUser)
    if(gUser?.email && gUser?.authentication?.accessToken) {
      // this.store.dispatch(AppActions.getGoogleJwt({ email: gUser.email }));
    }
  }
}
