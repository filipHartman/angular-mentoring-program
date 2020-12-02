import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { SiteMap } from '@enums/site-map.enum';
import { Course } from '@interfaces/course';
import { CoursesService } from '@services/courses/courses.service';
import { render, RenderResult } from '@testing-library/angular';
import { Observable, of } from 'rxjs';
import { exampleCourse } from './../../shared/testUtils/index';
import { CoursesModule } from './courses.module';
import { CoursesComponent } from './courses.page';

const mockCoursesService = {
  courses$: of([exampleCourse]),
  removeItem(course: Course): void {},
};

const mockDialog = {
  open(): any {},
};

const dialogRefFactory = (result: boolean) => {
  return {
    afterClosed: (): Observable<boolean> => of(result),
  };
};

describe('CoursesComponent', () => {
  let component: RenderResult<CoursesComponent, CoursesComponent>;
  let instance: CoursesComponent;
  beforeEach(async () => {
    component = await render(CoursesComponent, {
      imports: [CoursesModule, RouterTestingModule],
      providers: [
        {
          provide: CoursesService,
          useValue: mockCoursesService,
        },
        {
          provide: MatDialog,
          useValue: mockDialog,
        },
      ],
    });
    instance = component.fixture.componentInstance;
  });

  it('should show title of the provided course', () => {
    const { getByText } = component;
    expect(getByText(exampleCourse.title)).toBeTruthy();
  });

  it('should show delete modal after clicking delete button', () => {
    const { getByText, click } = component;
    const dialog = TestBed.inject(MatDialog);
    spyOn(dialog, 'open');
    click(getByText('Delete'));
    expect(dialog.open).toHaveBeenCalled();
  });

  it('should remove course after click "confirm" on modal', () => {
    const { getByText, click } = component;
    const dialog = TestBed.inject(MatDialog);
    const service = TestBed.inject(CoursesService);
    // QUESTION: IS IT GOOD TEST SCENARIO AND IMPLEMENTATION OF TEST?
    spyOn(dialog, 'open').and.returnValue(dialogRefFactory(true) as any);
    spyOn(service, 'removeItem');
    click(getByText('Delete'));
    expect(service.removeItem).toHaveBeenCalledWith(exampleCourse);
  });

  it('should not remove course after click "cancel" on modal', () => {
    const { getByText, click } = component;
    const dialog = TestBed.inject(MatDialog);
    const service = TestBed.inject(CoursesService);
    // QUESTION: IS IT GOOD TEST SCENARIO AND IMPLEMENTATION OF TEST?
    spyOn(dialog, 'open').and.returnValue(dialogRefFactory(false) as any);
    spyOn(service, 'removeItem');
    click(getByText('Delete'));
    expect(service.removeItem).not.toHaveBeenCalled();
  });

  it('should call onLoadMore after clicking the button with label "Load more"', () => {
    const { getByText, click } = component;
    spyOn(instance, 'onLoadMore');
    click(getByText('Load more'));
    expect(instance.onLoadMore).toHaveBeenCalled();
  });

  it('should navigate to AddCourse page after clicking the button with label "Add course"', () => {
    const { getByText, click } = component;
    const router = TestBed.inject(Router);
    spyOn(router, 'navigateByUrl');
    click(getByText('Add course'));
    expect(router.navigateByUrl).toHaveBeenCalledWith(SiteMap.NEW_COURSE);
  });
});
