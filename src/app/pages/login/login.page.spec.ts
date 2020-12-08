import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AuthService } from '@services/auth/auth.service';
import { render, RenderResult } from '@testing-library/angular';
import { exampleLogin, exampleUser } from './../../shared/testUtils/index';
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
      ],
    });
  });

  it('should login after entering right credential', () => {
    const { getByLabelText, getByText, type, click } = component;
    const auth = TestBed.inject(AuthService);
    spyOn(auth, 'login');
    const router = TestBed.inject(Router);
    spyOn(router, 'navigateByUrl');
    type(getByLabelText('Email'), exampleLogin.email);
    type(getByLabelText('Password'), exampleLogin.password);
    click(getByText('Login'));
    expect(auth.login).toHaveBeenCalledWith(exampleUser);
    expect(router.navigateByUrl).toHaveBeenCalledWith('courses');
  });

  it('should prevent login when passowerd is wrong', () => {
    const { getByLabelText, getByText, type, click } = component;
    spyOn(window, 'alert');
    type(getByLabelText('Email'), exampleLogin.email);
    type(getByLabelText('Password'), 'wrong password');
    click(getByText('Login'));
    expect(window.alert).toHaveBeenCalledWith(
      'Wrong credentials!!! Try again!!!',
    );
  });

  it('should prevent login when email is wrong', () => {
    const { getByLabelText, getByText, type, click } = component;
    spyOn(window, 'alert');
    type(getByLabelText('Email'), 'wrong email');
    type(getByLabelText('Password'), exampleLogin.password);
    click(getByText('Login'));
    expect(window.alert).toHaveBeenCalledWith(
      'Wrong credentials!!! Try again!!!',
    );
  });

  it('should prevent login when inputs are empty', () => {
    const { getByText, click } = component;
    spyOn(window, 'alert');
    click(getByText('Login'));
    expect(window.alert).toHaveBeenCalledWith(
      'Wrong credentials!!! Try again!!!',
    );
  });
});
