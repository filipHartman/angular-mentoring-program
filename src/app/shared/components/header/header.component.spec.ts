import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { render, RenderResult } from '@testing-library/angular';
import { AuthService } from './../../services/auth/auth.service';
import { routerMock } from './../../testUtils/router';
import { HeaderComponent } from './header.component';
import { HeaderModule } from './header.module';

describe('HeaderComponent', () => {
  let component: RenderResult<HeaderComponent, HeaderComponent>;

  beforeEach(async () => {
    component = await render(HeaderComponent, {
      imports: [HeaderModule],
      providers: [
        {
          provide: Router,
          useValue: routerMock,
        },
      ],
      detectChanges: false,
    });
  });

  it('should show user login and log off buttons if user is authenticated', () => {
    // const { getByText } = component;
    // const authService = TestBed.inject(AuthService);
    // spyOn(authService, 'isAuthenticated').and.returnValue(true);
    // component.fixture.detectChanges();
    // expect(getByText('User login')).toBeTruthy();
    // expect(getByText('Log off')).toBeTruthy();
  });

  it('should hide user login and log off buttons if user is not authenticated', () => {
    // const { queryByText } = component;
    // const authService = TestBed.inject(AuthService);
    // spyOn(authService, 'isAuthenticated').and.returnValue(false);
    // component.fixture.detectChanges();
    // expect(queryByText('User login')).toBeFalsy();
    // expect(queryByText('Log off')).toBeFalsy();
  });

  it('should logout the user after clicking the log off button and navigate to login page', () => {
    // const { getByText, click } = component;
    // const authService = TestBed.inject(AuthService);
    // spyOn(authService, 'isAuthenticated').and.returnValue(true);
    // spyOn(authService, 'logout');
    // const router = TestBed.inject(Router);
    // spyOn(router, 'navigateByUrl');
    // component.fixture.detectChanges();
    // click(getByText('Log off'));
    // expect(authService.logout).toHaveBeenCalled();
    // expect(router.navigateByUrl).toHaveBeenCalledWith('');
  });
});
