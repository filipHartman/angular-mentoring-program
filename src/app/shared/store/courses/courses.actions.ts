import { Course } from '@interfaces/course';
import { createAction, props, union } from '@ngrx/store';

export const COURSES = '[COURSES] Get courses';
export const LOAD_COURSES = '[COURSES] Load courses';
export const ADD_COURSE = '[COURSES] Add course';
export const UPDATE_COURSE = '[COURSES] Update course';
export const DELETE_COURSE = '[COURSES] Delete course';

export const courses = createAction(
  COURSES,
  props<{ numberOfCourses: number }>(),
);

export const loadCourses = createAction(
  LOAD_COURSES,
  props<{ courses: Course[] }>(),
);

export const addCourse = createAction(ADD_COURSE, props<{ course: Course }>());

export const updateCourse = createAction(
  UPDATE_COURSE,
  props<{ course: Course }>(),
);

export const deleteCourse = createAction(
  DELETE_COURSE,
  props<{ course: Course }>(),
);

const all = union({
  courses,
  loadCourses,
  updateCourse,
  addCourse,
  deleteCourse,
});

export type CourseActions = typeof all;
