import { LoginUser, User } from '@interfaces/user';
import { createAction, props, union } from '@ngrx/store';
import { TokenResponse } from './../../interfaces/token-reponse';

export const LOGIN = '[Auth] Login';
export const LOGIN_SUCCESS = '[Auth] Login Success';
export const LOGIN_FAIL = '[Auth] Login Fail';
export const LOGOUT = '[AUTH] Logout';
export const STORE_USER = '[AUTH] Store User';

export const login = createAction(LOGIN, props<{ user: LoginUser }>());

export const loginSuccess = createAction(
  LOGIN_SUCCESS,
  props<{ token: TokenResponse }>(),
);

export const loginFail = createAction(LOGIN_FAIL);

export const storeUser = createAction(STORE_USER, props<{ user: User }>());

export const logout = createAction(LOGOUT);

const all = union({ login, loginSuccess, loginFail, logout });

export type AuthActions = typeof all;
