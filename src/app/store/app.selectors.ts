import { createSelector } from '@ngrx/store';

export const selectAppState = state => state.app;

export const selectUser = createSelector(
  selectAppState,
  state => state.user
);

export const selectPerfilUsuario = createSelector(
  selectAppState,
  state => state.perfilUsuario
);

export const selectResultado = createSelector(
  selectAppState,
  state => state.resultado
);
