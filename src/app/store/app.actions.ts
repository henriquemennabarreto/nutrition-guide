import { createAction, props } from '@ngrx/store';
import { IUser } from './app.reducer';

// User actions
export const setUser = createAction('[App] Set User', props<{ user: IUser }>());
export const logoutUser = createAction('[App] Logout User');

// PerfilUsuario actions
export const setPerfilUsuario = createAction('[App] Set PerfilUsuario', props<{ perfilUsuario: { genero: string, idade: number, altura: number, objetivo: string } }>());

// Resultado actions
export const setResultado = createAction('[App] Set Resultado', props<{ resultado: { conteudo: string } }>());
