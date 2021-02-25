import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, tap } from 'rxjs/operators';
import { ApiService } from './../../services/api/api.service';
import {
  ADD_COURSE,
  CourseActions,
  COURSES,
  DELETE_COURSE,
  LOAD_COURSES,
  UPDATE_COURSE,
} from './courses.actions';

@Injectable()
export class CoursesEffects {
  constructor(
    private readonly actions$: Actions<CourseActions>,
    private readonly api: ApiService,
  ) {}

  courses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(COURSES),
      switchMap((action) => this.api.getAllCourses(action.numberOfCourses)),
      map((courses) => ({ type: LOAD_COURSES, courses })),
    ),
  );

  addCourse$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ADD_COURSE),
        tap((action) => {
          this.api.createCourse(action.course);
        }),
      ),
    { dispatch: false },
  );

  updateCourse$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(UPDATE_COURSE),
        tap((action) => {
          this.api.updateCourse(action.course);
        }),
      ),
    { dispatch: false },
  );

  deleteCourse$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(DELETE_COURSE),
        tap((action) => this.api.deleteCourse(action.course)),
      ),
    { dispatch: false },
  );
}
