import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { NameModel } from '@interfaces/user';
import { AuthService } from '@services/auth/auth.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  userIcon = faUser;
  logOffIcon = faSignOutAlt;
  userInfo: unknown;

  constructor(
    private readonly auth: AuthService,
    private readonly router: Router,
  ) {}

  get isAuthenticated$(): Observable<boolean> {
    return this.auth.isAuthenticated();
  }

  get userName$(): Observable<NameModel | null> {
    return this.auth
      .getUserInfo()
      .pipe(map((user) => (!!user ? user.name : null)));
  }

  logout(): void {
    this.auth.logout();
    this.router.navigateByUrl('');
  }
}
