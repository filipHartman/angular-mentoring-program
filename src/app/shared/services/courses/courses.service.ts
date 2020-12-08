import { Injectable } from '@angular/core';
import { Course } from '@interfaces/course';
import { exampleCoursesList } from 'app/shared/testUtils';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private courses: BehaviorSubject<Course[]>;
  private currentIdNumber = 4;

  constructor() {
    this.courses = this.setCourses();
  }

  private setCourses(): BehaviorSubject<Course[]> {
    return new BehaviorSubject<Course[]>([...exampleCoursesList]);
  }

  get courses$(): Observable<Course[]> {
    return this.courses
      .asObservable()
      .pipe(map((courses) => (courses.length !== 0 ? courses : null)));
  }

  createCourse(newCourse: Course): void {
    const arr = this.courses.getValue();
    arr.push(newCourse);
    this.courses.next(arr);
  }

  getItemById(id: string): Observable<Course> {
    return this.courses$.pipe(
      map((courses) => courses.find((course) => course.id === id)),
    );
  }

  updateItem(course: Course): void {}

  removeItem(course: Course): void {
    const coursesArr = [...this.courses.getValue()];
    const index = coursesArr.findIndex((c) => c.id === course.id);
    coursesArr.splice(index, 1);
    this.courses.next(coursesArr);
  }

  getCurrentId(): string {
    return `course-${this.currentIdNumber++}`;
  }
}
