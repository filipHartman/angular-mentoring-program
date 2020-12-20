import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { SiteMap } from '@enums/site-map.enum';
import { AuthService } from '@services/auth/auth.service';
import { render, RenderResult } from '@testing-library/angular';
import { of } from 'rxjs';
import { exampleLogin } from './../../shared/testUtils/index';
import { routerMock } from './../../shared/testUtils/router';
import { LoginModule } from './login.module';
import { LoginComponent } from './login.page';

describe('LoginComponent', () => {
  let component: RenderResult<LoginComponent, LoginComponent>;

  beforeEach(async () => {
    component = await render(LoginComponent, {
      imports: [LoginModule],
      providers: [
        {
          provide: Router,
          useValue: routerMock,
        },
        {
          provide: AuthService,
          useValue: {
            login() {
              return of(true);
            },
          },
        },
      ],
    });
  });

  it('should login after entering right credential', () => {
    const { getByLabelText, getByText, type, click } = component;
    const auth = TestBed.inject(AuthService);
    spyOn(auth, 'login');
    const router = TestBed.inject(Router);
    spyOn(router, 'navigateByUrl');
    type(getByLabelText('Email'), exampleLogin.login);
    type(getByLabelText('Password'), exampleLogin.password);
    click(getByText('Login'));
    expect(auth.login).toHaveBeenCalledWith(exampleLogin);
    expect(router.navigateByUrl).toHaveBeenCalledWith(SiteMap.COURSES);
  });

  it('should prevent login when passowerd is wrong', () => {
    const { getByLabelText, getByText, type, click } = component;
    const auth = TestBed.inject(AuthService);
    spyOn(auth, 'login').and.throwError('error');
    spyOn(console, 'error');
    type(getByLabelText('Email'), exampleLogin.login);
    type(getByLabelText('Password'), 'wrong password');
    click(getByText('Login'));
    expect(console.error).toHaveBeenCalled();
  });

  it('should prevent login when email is wrong', () => {
    const { getByLabelText, getByText, type, click } = component;
    const auth = TestBed.inject(AuthService);
    spyOn(auth, 'login').and.throwError('error');
    spyOn(console, 'error');
    type(getByLabelText('Email'), 'wrong email');
    type(getByLabelText('Password'), exampleLogin.password);
    click(getByText('Login'));
    expect(console.error).toHaveBeenCalled();
  });

  it('should prevent login when inputs are empty', () => {
    const { getByText, click } = component;
    spyOn(window, 'alert');
    const auth = TestBed.inject(AuthService);
    spyOn(auth, 'login').and.throwError('error');
    spyOn(console, 'error');
    click(getByText('Login'));
    expect(console.error).toHaveBeenCalled();
  });
});
