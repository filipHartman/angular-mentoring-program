import { Injectable } from '@angular/core';
import { TokenResponse } from '@interfaces/token-reponse';
import { LoginUser, User } from '@interfaces/user';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { ApiService } from './../api/api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly KEY = 'user';

  constructor(private readonly api: ApiService) {}

  login(user: LoginUser): Observable<unknown> {
    return this.api.authenticateUser(user).pipe(
      switchMap((res: TokenResponse) => this.api.getCurrentUser(res)),
      tap((user) => sessionStorage.setItem(this.KEY, JSON.stringify(user))),
    );
  }

  logout(): void {
    sessionStorage.removeItem(this.KEY);
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  getToken(): string {
    const user: User = this.getUserInfo();
    return !!user ? user.token : null;
  }

  getUserInfo(): User {
    return JSON.parse(sessionStorage.getItem(this.KEY));
  }
}
