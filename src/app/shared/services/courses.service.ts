import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Course } from '../interfaces/course';
import { exampleCoursesList } from '../testUtils';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private courses: BehaviorSubject<Course[]>;

  constructor() {
    this.courses = this.setCourses();
  }

  private setCourses(): BehaviorSubject<Course[]> {
    return new BehaviorSubject<Course[]>(exampleCoursesList);
  }

  get courses$(): Observable<Course[]> {
    return this.courses
      .asObservable()
      .pipe(filter((courses) => courses.length !== 0));
  }
}
