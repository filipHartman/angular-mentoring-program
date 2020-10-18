import { Course } from '../../shared/interfaces/course';
import { Component } from '@angular/core';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.page.html',
  styleUrls: ['./courses.page.scss'],
})
export class CoursesComponent {
  readonly courses: Course[] = [
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
  ];
  addCourseIcon = faPlusCircle;
}
