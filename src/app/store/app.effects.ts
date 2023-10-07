import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { setUser, setPerfilUsuario, setResultado } from './app.actions';
import { UserService } from '../shared/services/user.service';

@Injectable()
export class AppEffects {

  // Exemplo de efeito para carregar dados do usuário
  loadUser$ = createEffect(() => this.actions$.pipe(
    ofType(setUser),
    mergeMap(() => this.userService.getUserData() // Presumindo que você tenha um serviço para isso
      .pipe(
        map(user => setUser({ user })),
        catchError(() => EMPTY)
      ))
  ));

  constructor(
    private actions$: Actions,
    private userService: UserService
  ) {}
}
