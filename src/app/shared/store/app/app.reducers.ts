import { Action, createReducer, on } from '@ngrx/store';
import { loginFail, logout } from '../auth/auth.actions';
import {
  LOGIN_FAIL,
  LOGOUT,
  storeUser,
  STORE_USER,
} from './../auth/auth.actions';
import { COURSES, loadCourses } from './../courses/courses.actions';
import { AppState, initialState } from './app.state';

const _appReducer = createReducer(
  initialState,
  on(storeUser, (state, action) => {
    console.log(STORE_USER);
    return { ...state, user: action.user };
  }),
  on(loginFail, (state) => {
    console.log(LOGIN_FAIL);
    return { ...state, isLoginFailed: true };
  }),
  on(logout, (state) => {
    console.log(LOGOUT);
    return { ...state, user: null, courses: [] };
  }),
  on(loadCourses, (state, action) => {
    console.log(COURSES);
    return { ...state, courses: action.courses };
  }),
);

export const appKey = 'APP';
export function appReaducer(state: AppState | undefined, action: Action) {
  return _appReducer(state, action);
}
