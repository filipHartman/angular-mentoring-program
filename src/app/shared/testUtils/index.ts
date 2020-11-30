import { Course } from '@interfaces/course';
import { LoginUser, User } from '@interfaces/user';
import { addDays, startOfToday, subDays } from 'date-fns';

export const exampleCourse: Course = {
  id: 'course-1',
  title: 'Video Course 1. Name tag',
  description: `Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.`,
  duration: 88,
  creationTime: new Date(2020, 8, 28),
};

export const exampleCoursesList: Course[] = [
  {
    id: 'course-1',
    title: 'Video Course 1. Name tag',
    description: `Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.`,
    duration: 88,
    creationTime: new Date(2020, 11, 28),
  },
  {
    id: 'course-2',
    title: 'Video Course 2. Name tag',
    description: `Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.`,
    duration: 88,
    creationTime: new Date(2020, 9, 30),
    topRated: true,
  },
  {
    id: 'course-3',
    title: 'Video Course 3. Name tag',
    description: `Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.`,
    duration: 88,
    creationTime: new Date(2020, 8, 28),
  },
];

export const today = startOfToday();
export const futureDate = addDays(today, 10);
export const twoWeeksBefore = subDays(today, 14);
export const moreThanTwoWeeksBefore = subDays(today, 30);

export const exampleLogin: LoginUser = {
  email: 'admin',
  password: 'admin',
};

export const exampleUser: User = {
  id: 'user1',
  firstName: 'Grzegorz',
  lastName: 'Brzęczyszczykiewicz',
};
