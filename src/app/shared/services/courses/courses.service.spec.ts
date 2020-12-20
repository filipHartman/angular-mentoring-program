import { TestBed } from '@angular/core/testing';
import { Course } from '@interfaces/course';
import { cold } from 'jasmine-marbles';
import { of } from 'rxjs';
import { exampleCoursesList } from '../../testUtils/index';
import { ApiService } from './../api/api.service';
import { CoursesService } from './courses.service';

const testCourses: Course[] = [...exampleCoursesList];

const apiServiceMock = {
  getAllCourses() {
    return of(exampleCoursesList);
  },
  getCourseById() {},
  createCourse() {},
  updateCourse() {},
  deleteCourse() {},
};

describe('CoursesService', () => {
  let service: CoursesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: ApiService,
          useValue: apiServiceMock,
        },
      ],
    });
    service = TestBed.inject(CoursesService);
  });

  it('should return list of courses', () => {
    expect(service.courses$).toBeObservable(cold('a', { a: testCourses }));
  });

  it('should add new course', () => {
    const newCourse: Course = {
      id: service.getCurrentId(),
      name: 'Angular routing',
      description: 'Course about Angular routing',
      date: new Date(2020, 11, 29),
      length: 123,
    };
    service.createCourse(newCourse);

    expect(service.courses$).toBeObservable(
      cold('a', { a: [...testCourses, newCourse] }),
    );
  });

  it('should return course based on course id', () => {
    const courseId = exampleCoursesList[0].id;
    const result = service.getItemById(courseId);
    expect(result).toBeObservable(cold('a', { a: testCourses[0] }));
  });

  it('should remove course from the list', () => {
    const courseToRemove = testCourses[1];
    service.removeItem(courseToRemove);
    expect(service.courses$).toBeObservable(
      cold('a', { a: [testCourses[0], testCourses[2]] }),
    );
  });

  it('should return null after deleting all courses', () => {
    testCourses.forEach((course) => service.removeItem(course));
    expect(service.courses$).toBeObservable(cold('a', { a: null }));
  });
});
