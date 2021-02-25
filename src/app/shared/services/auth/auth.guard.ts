import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SiteMap } from '@enums/site-map.enum';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private readonly auth: AuthService,
    private readonly router: Router,
  ) {}

  canActivate(): Observable<boolean> {
    return this.auth.isAuthenticated().pipe(
      map((isAuthenticated) => {
        if (isAuthenticated) {
          return true;
        }
        this.router.navigateByUrl(SiteMap.LOGIN);
        return false;
      }),
    );
  }
}
