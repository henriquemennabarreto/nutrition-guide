import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { map } from 'rxjs/operators';
import * as Selectors from '../../store/app.selectors';
import { IUser } from 'src/app/store/app.reducer';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private store: Store, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.store.pipe(
      select(Selectors.selectUser),
      map((user: IUser) => {
        if (user && user.accessToken) {
          if (state.url === '/tabs/autenticar') {
            this.router.navigate(['/tabs/perfil-usuario']);
            return false;
          }
          return true;
        } else {
          if (state.url !== '/tabs/autenticar') {
            this.router.navigate(['/tabs/autenticar']);
            return false;
          }
          return true;
        }
      })
    );
  }
}
