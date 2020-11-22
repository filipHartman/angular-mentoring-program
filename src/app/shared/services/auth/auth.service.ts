import { Injectable } from '@angular/core';
import { User } from '@interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly KEY = 'user';

  login(user: User): void {
    sessionStorage.setItem(
      this.KEY,
      JSON.stringify({ ...user, token: 'fake-token' }),
    );
  }

  logout(): void {
    sessionStorage.removeItem(this.KEY);
  }

  isAuthenticated(): boolean {
    const user = this.getUserInfo();
    if (user && user.token) {
      return true;
    }
    return false;
  }

  getUserInfo(): User {
    return JSON.parse(sessionStorage.getItem(this.KEY));
  }
}
