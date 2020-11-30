import { TestBed } from '@angular/core/testing';
import { Course } from '@interfaces/course';
import { cold } from 'jasmine-marbles';
import { exampleCoursesList } from '../../testUtils/index';
import { CoursesService } from './courses.service';

const testCourses: Course[] = [...exampleCoursesList];

describe('CoursesService', () => {
  let service: CoursesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoursesService);
  });

  it('should return list of courses', () => {
    expect(service.courses$).toBeObservable(cold('a', { a: testCourses }));
  });

  it('should add new course', () => {
    const newCourse: Course = {
      id: service.getCurrentId(),
      title: 'Angular routing',
      description: 'Course about Angular routing',
      creationTime: new Date(2020, 11, 29),
      duration: 123,
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
