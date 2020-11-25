import { TestBed } from '@angular/core/testing';
import { cold } from 'jasmine-marbles';
import { exampleCoursesList } from '../../testUtils/index';
import { CoursesService } from './courses.service';

describe('CoursesService', () => {
  let service: CoursesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoursesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return list of courses', () => {
    expect(service.courses$).toBeObservable(
      cold('a', { a: exampleCoursesList }),
    );
  });
});
