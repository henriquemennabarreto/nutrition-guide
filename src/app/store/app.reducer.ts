import { ActionReducer, MetaReducer, State, createReducer, on } from '@ngrx/store';
import { setUser, setPerfilUsuario, setResultado } from './app.actions';
import { environment } from 'src/environments/environment';
import { localStorageSync } from 'ngrx-store-localstorage';

export interface IAppState {
    user: {
        name?: string|null;
        firstName?: string|null;
        lastName?: string|null;
        email?: string|null;
        accessToken?: string|null;
    };
    perfilUsuario: {
        genero: string|null;
        idade: number|null;
        altura: number|null;
        objetivo: string|null;
    };
    resultado: {
        conteudo: string|null;
    };
}
export const initialState: IAppState = {
    user: {
        name: null,
        firstName: null,
        lastName: null,
        accessToken: null,
        email: null
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
    on(setPerfilUsuario, (state, { perfilUsuario }) => ({ ...state, perfilUsuario })),
    on(setResultado, (state, { resultado }) => ({ ...state, resultado }))
);


export function logger(reducer: ActionReducer<State<IAppState>>): ActionReducer<State<IAppState>> {
    return (state, action) => {
        return reducer(state, action);
    };
}

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
    return localStorageSync({
        keys: ['user', 'perfilUsuario', 'resultado'],
        rehydrate: true
    })(reducer);
}
    
export const metaReducers: MetaReducer<State<IAppState>>[] = !environment.production ? 
    [logger, localStorageSyncReducer] : [localStorageSyncReducer];
    