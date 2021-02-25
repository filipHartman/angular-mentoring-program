import { Injectable } from '@angular/core';
import { LoginUser, User } from '@interfaces/user';
import { Observable } from 'rxjs';
import { StoreFacade } from './../../store/store.facade';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly store: StoreFacade) {}

  login(user: LoginUser): Observable<boolean> {
    this.store.login(user);
    return this.isAuthenticated();
  }

  logout(): void {
    this.store.logout();
  }

  isAuthenticated(): Observable<boolean> {
    return this.store.isAuthenticated$;
  }

  getToken(): Observable<string> {
    return this.store.token$;
  }

  getUserInfo(): Observable<User> {
    return this.store.currentUser$;
  }
}
