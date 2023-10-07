import { createAction, props } from '@ngrx/store';

// User actions
export const setUser = createAction('[App] Set User', props<{ user: { name: string, firstName: string, lastName: string, accessToken: string, email: string } }>());

// PerfilUsuario actions
export const setPerfilUsuario = createAction('[App] Set PerfilUsuario', props<{ perfilUsuario: { genero: string, idade: number, altura: number, objetivo: string } }>());

// Resultado actions
export const setResultado = createAction('[App] Set Resultado', props<{ resultado: { conteudo: string } }>());
