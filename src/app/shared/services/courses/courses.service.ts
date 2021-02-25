import { Injectable } from '@angular/core';
import { Course } from '@interfaces/course';
import { FilterPipe } from '@pipes/filter/filter.pipe';
import { OrderByPipe } from '@pipes/order-by/order-by.pipe';
import { ApiService } from '@services/api/api.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { generate } from 'shortid';
import { StoreFacade } from './../../store/store.facade';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private courses: BehaviorSubject<Course[]> = new BehaviorSubject([]);
  private order = new OrderByPipe();
  private filterPipe = new FilterPipe();

  private numberOfCourses = 5;
  private paginationStep = 5;

  constructor(
    private readonly api: ApiService,
    private readonly store: StoreFacade,
  ) {
    this.getCoursesFromBE();
  }

  getCoursesFromBE(): void {
    this.store.getCourses(this.numberOfCourses);
  }

  get courses$(): Observable<Course[]> {
    return this.store.courses$.pipe(
      map((courses) =>
        courses.length !== 0 ? this.order.transform(courses) : null,
      ),
    );
  }

  createCourse(newCourse: Course): void {
    this.requestWithUpdateCourses(() => this.store.addCourse(newCourse));
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
    this.requestWithUpdateCourses(() => this.store.updateCourse(course));
  }

  removeItem(course: Course): void {
    this.requestWithUpdateCourses(() => this.store.deleteCourse(course));
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
