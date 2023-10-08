import { ActionReducer, MetaReducer, State, createReducer, on } from '@ngrx/store';
import { setUser, setPerfilUsuario, setResultado, logoutUser, setProfilePicture } from './app.actions';
import { environment } from 'src/environments/environment';
import { localStorageSync } from 'ngrx-store-localstorage';

export interface IRootState {
  app: IAppState;
}

export interface IAppState {
    user: IUser;
    perfilUsuario: IPerfilUsuario;
    resultado: IResultado;
}

export interface IUser {
    name?: string|null;
    email?: string|null;
    accessToken?: string|null;
    profilePicture?: string|null;
}

export interface IPerfilUsuario {
    genero: string|null;
    idade: number|null;
    altura: number|null;
    objetivo: string|null;
}

export interface IResultado {
    conteudo: string|null;
}

export const initialState: IAppState = {
    user: {
        name: null,
        accessToken: null,
        email: null,
        profilePicture: null
    },
    perfilUsuario: {
        genero: null,
        idade: null,
        altura: null,
        objetivo: null
    },
    resultado: {
        conteudo: null
    }
};

export const appReducer = createReducer(
    initialState,
    on(setUser, (state, { user }) => ({ ...state, user })),
    on(logoutUser, state => ({ ...state, user: initialState.user })),
    on(setPerfilUsuario, (state, { perfilUsuario }) => ({ ...state, perfilUsuario })),
    on(setProfilePicture, (state, { profilePicture }) => ({ ...state, user: { ...state.user, profilePicture: profilePicture }})),
    on(setResultado, (state, { resultado }) => ({ ...state, resultado }))
);

export function logger(reducer: ActionReducer<IRootState>): ActionReducer<IRootState> {
    return (state, action) => {
        return reducer(state, action);
    };
}

export function localStorageSyncReducer(reducer: ActionReducer<IRootState>): ActionReducer<IRootState> {
    return localStorageSync({
        keys: ['app'],
        rehydrate: true
    })(reducer);
}

export const metaReducers: MetaReducer<IRootState>[] = !environment.production ? 
    [logger, localStorageSyncReducer] : [localStorageSyncReducer];
