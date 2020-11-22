import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { User } from '@interfaces/user';
import { AuthService } from '@services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  userIcon = faUser;
  logOffIcon = faSignOutAlt;

  constructor(
    private readonly auth: AuthService,
    private readonly router: Router,
  ) {}

  get isAuthenticated(): boolean {
    return this.auth.isAuthenticated();
  }

  get user(): User {
    return this.auth.getUserInfo();
  }

  logout(): void {
    this.auth.logout();
    this.router.navigateByUrl('');
  }
}
