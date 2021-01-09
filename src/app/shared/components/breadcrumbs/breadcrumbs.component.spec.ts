import { RouterTestingModule } from '@angular/router/testing';
import { CoursesService } from '@services/courses/courses.service';
import { render, RenderResult } from '@testing-library/angular';
import { courseServiceMock } from 'app/shared/testUtils/course-service';
import { BreadcrumbsComponent } from './breadcrumbs.component';
import { BreadcrumbsModule } from './breadcrumbs.module';

describe('BreadcrumbsComponent', () => {
  let component: RenderResult<BreadcrumbsComponent, BreadcrumbsComponent>;

  beforeEach(async () => {
    component = await render(BreadcrumbsComponent, {
      imports: [BreadcrumbsModule, RouterTestingModule],
      providers: [{ provide: CoursesService, useValue: courseServiceMock }],
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
