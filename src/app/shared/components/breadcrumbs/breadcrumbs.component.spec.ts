import { RouterTestingModule } from '@angular/router/testing';
import { render, RenderResult } from '@testing-library/angular';
import { BreadcrumbsComponent } from './breadcrumbs.component';
import { BreadcrumbsModule } from './breadcrumbs.module';

describe('BreadcrumbsComponent', () => {
  let component: RenderResult<BreadcrumbsComponent, BreadcrumbsComponent>;

  beforeEach(async () => {
    component = await render(BreadcrumbsComponent, {
      imports: [BreadcrumbsModule, RouterTestingModule],
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
