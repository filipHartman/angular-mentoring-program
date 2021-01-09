import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Course } from '@interfaces/course';
import { CoursesService } from '@services/courses/courses.service';
import { render, RenderResult } from '@testing-library/angular';
import { exampleCourse } from './../../shared/testUtils/index';
import { AddCourseModule } from './add-course.module';
import { AddCourseComponent } from './add-course.page';

describe('AddCourseComponent', () => {
  let component: RenderResult<AddCourseComponent, AddCourseComponent>;
  beforeEach(async () => {
    component = await render(AddCourseComponent, {
      imports: [AddCourseModule, RouterTestingModule],
    });
  });

  it('should submit course after filling the data and navigate to courses page', () => {
    const { getByText, getByLabelText, type, click } = component;
    const courseService = TestBed.inject(CoursesService);
    const router = TestBed.inject(Router);
    spyOn(router, 'navigateByUrl');
    spyOn(courseService, 'createCourse');
    spyOn(courseService, 'getCurrentId').and.returnValue('course-1');
    const date = '2020-09-21';

    type(getByLabelText('Title'), exampleCourse.name);
    type(getByLabelText('Description'), exampleCourse.description);
    type(getByLabelText('Duration'), exampleCourse.length);
    type(getByLabelText('Creation date'), date);
    click(getByText('Submit'));
    expect(courseService.createCourse).toHaveBeenCalledWith({
      id: 'course-1',
      name: exampleCourse.name,
      description: exampleCourse.description,
      length: exampleCourse.length,
      date: new Date(date),
    } as Course);
    expect(router.navigateByUrl).toHaveBeenCalledWith('courses');
  });

  it('should go back to courses page on cancel click', () => {
    const { getByText, click } = component;
    const router = TestBed.inject(Router);
    spyOn(router, 'navigateByUrl');
    click(getByText('Cancel'));
    expect(router.navigateByUrl).toHaveBeenCalledWith('courses');
  });
});
