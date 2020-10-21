import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Course } from '../interfaces/course';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private courses: BehaviorSubject<Course[]>;

  constructor() {
    this.courses = this.setCourses();
  }

  private setCourses(): BehaviorSubject<Course[]> {
    return new BehaviorSubject<Course[]>([
      {
        id: 'course-1',
        title: 'Video Course 1. Name tag',
        description: `Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.`,
        duration: 88,
        creationTime: new Date(2020, 8, 28),
      },
      {
        id: 'course-2',
        title: 'Video Course 1. Name tag',
        description: `Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.`,
        duration: 88,
        creationTime: new Date(2020, 8, 28),
      },
      {
        id: 'course-3',
        title: 'Video Course 1. Name tag',
        description: `Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.`,
        duration: 88,
        creationTime: new Date(2020, 8, 28),
      },
    ]);
  }
  get courses$(): Observable<Course[]> {
    return this.courses.asObservable();
  }
}
