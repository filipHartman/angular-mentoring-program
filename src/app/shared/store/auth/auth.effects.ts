import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ApiService } from '@services/api/api.service';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import {
  AuthActions,
  LOGIN,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  STORE_USER,
} from './auth.actions';

@Injectable()
export class AuthEffects {
  constructor(
    private readonly actions$: Actions<AuthActions>,
    private readonly api: ApiService,
  ) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LOGIN),
      switchMap((action) =>
        this.api.authenticateUser(action.user).pipe(
          map((token) => ({ type: LOGIN_SUCCESS, token })),
          catchError(() => of({ type: LOGIN_FAIL })),
        ),
      ),
    ),
  );

  loginSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LOGIN_SUCCESS),
      switchMap((action) =>
        this.api.getCurrentUser(action.token).pipe(
          map((user) => ({ type: STORE_USER, user })),
          catchError(() => of({ type: LOGIN_FAIL })),
        ),
      ),
    ),
  );
}
