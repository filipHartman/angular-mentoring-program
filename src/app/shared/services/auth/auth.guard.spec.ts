import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { SiteMap } from '@enums/site-map.enum';
import { routerMock } from './../../testUtils/router';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: Router,
          useValue: routerMock,
        },
      ],
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should prevent route activation if user is not authenticated and navigate to login page', () => {
    const authService = TestBed.inject(AuthService);
    const router = TestBed.inject(Router);
    spyOn(authService, 'isAuthenticated').and.returnValue(false);
    spyOn(router, 'navigateByUrl');
    expect(guard.canActivate()).toBe(false);
    expect(router.navigateByUrl).toHaveBeenCalledWith(SiteMap.LOGIN);
  });

  it('should allow route activation if user is authenticated', () => {
    const authService = TestBed.inject(AuthService);
    spyOn(authService, 'isAuthenticated').and.returnValue(true);
    expect(guard.canActivate()).toBe(true);
  });
});
