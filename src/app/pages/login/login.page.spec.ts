import { Router } from '@angular/router';
import { render, RenderResult } from '@testing-library/angular';
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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
