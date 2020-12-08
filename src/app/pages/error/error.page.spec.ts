import { Router } from '@angular/router';
import { render, RenderResult } from '@testing-library/angular';
import { routerMock } from 'app/shared/testUtils/router';
import { ErrorModule } from './error.module';
import { ErrorComponent } from './error.page';

describe('ErrorComponent', () => {
  let component: RenderResult<ErrorComponent, ErrorComponent>;

  beforeEach(async () => {
    component = await render(ErrorComponent, {
      imports: [ErrorModule],
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
