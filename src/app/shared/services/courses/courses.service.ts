import { Injectable } from '@angular/core';
import { Course } from '@interfaces/course';
import { FilterPipe } from '@pipes/filter/filter.pipe';
import { OrderByPipe } from '@pipes/order-by/order-by.pipe';
import { ApiService } from '@services/api/api.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { generate } from 'shortid';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private courses: BehaviorSubject<Course[]> = new BehaviorSubject([]);
  private order = new OrderByPipe();
  private filterPipe = new FilterPipe();

  private numberOfCourses = 5;
  private paginationStep = 5;

  constructor(private readonly api: ApiService) {
    this.getCoursesFromBE();
  }

  getCoursesFromBE(): void {
    this.api.getAllCourses(this.numberOfCourses).subscribe({
      next: (courses) => this.courses.next(courses),
    });
  }

  get courses$(): Observable<Course[]> {
    return this.courses
      .asObservable()
      .pipe(
        map((courses) =>
          courses.length !== 0 ? this.order.transform(courses) : null,
        ),
      );
  }

  createCourse(newCourse: Course): void {
    this.requestWithUpdateCourses(() => this.api.createCourse(newCourse));
  }

  getItemById(id: string): Observable<Course> {
    return this.api.getCourseById(id);
  }

  searchCoursesByText(text: string): void {
    this.api.getAllCourses(this.numberOfCourses).subscribe((coursesFromBe) => {
      if (!!text) {
        this.courses.next(this.filterPipe.transform(coursesFromBe, text));
      }
    });
  }

  updateItem(course: Course): void {
    this.requestWithUpdateCourses(() => this.api.updateCourse(course));
  }

  removeItem(course: Course): void {
    this.requestWithUpdateCourses(() => this.api.deleteCourse(course));
  }

  getCurrentId(): string {
    return generate();
  }

  loadMoreCourses(): void {
    this.requestWithUpdateCourses(
      () => (this.numberOfCourses += this.paginationStep),
    );
  }

  private requestWithUpdateCourses(request: () => void): void {
    request();
    // I needed to add setTimeout because sometimes request for getting courses finishes before the request
    setTimeout(() => this.getCoursesFromBE(), 0);
  }
}
