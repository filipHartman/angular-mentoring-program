import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as Reducer from './app.reducers';
import { AppState } from './app.state';

export const getAppState = createFeatureSelector<AppState>(Reducer.appKey);
const getUserState = createSelector(getAppState, (app: AppState) => app.user);
const getCoursesState = createSelector(
  getAppState,
  (app: AppState) => app.courses,
);

export const getCurrentUser = createSelector(getUserState, (user) => user);
export const isAuthenticated = createSelector(getCurrentUser, (user) => !!user);
export const getToken = createSelector(getCurrentUser, (user) => user.token);

export const getCourses = createSelector(getCoursesState, (courses) => courses);
