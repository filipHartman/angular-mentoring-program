import { Injectable } from '@angular/core';
import { Course } from '@interfaces/course';
import { LoginUser, User } from '@interfaces/user';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as AppSelectors from './app/app.selectors';
import { AppState } from './app/app.state';
import { login, loginFail, logout } from './auth/auth.actions';
import {
  addCourse,
  courses,
  deleteCourse,
  updateCourse,
} from './courses/courses.actions';

@Injectable({
  providedIn: 'root',
})
export class StoreFacade {
  constructor(private readonly store: Store<AppState>) {}

  currentUser$: Observable<User> = this.store.select(
    AppSelectors.getCurrentUser,
  );
  isAuthenticated$: Observable<boolean> = this.store.select(
    AppSelectors.isAuthenticated,
  );
  token$: Observable<string> = this.store.select(AppSelectors.getToken);
  courses$: Observable<Course[]> = this.store.select(AppSelectors.getCourses);

  login(user: LoginUser) {
    this.store.dispatch(login({ user }));
  }

  loginFail() {
    this.store.dispatch(loginFail());
  }

  logout() {
    this.store.dispatch(logout());
  }

  getCourses(numberOfCourses: number) {
    this.store.dispatch(courses({ numberOfCourses }));
  }

  addCourse(course: Course) {
    this.store.dispatch(addCourse({ course }));
  }

  updateCourse(course: Course) {
    this.store.dispatch(updateCourse({ course }));
  }

  deleteCourse(course: Course) {
    this.store.dispatch(deleteCourse({ course }));
  }
}
