import { Course } from '@interfaces/course';
import { today } from './../../testUtils/index';
import { FilterPipe } from './filter.pipe';

const courses: Course[] = [
  {
    id: 'course1',
    title: 'Course 1. Basics of HTML',
    description: 'Description of Course 1',
    duration: 90,
    creationTime: today,
  },
  {
    id: 'course2',
    title: 'Course 2. Basics of CSS',
    description: 'Description of Course 2',
    duration: 90,
    creationTime: today,
  },

  {
    id: 'course3',
    title: 'Course 3. Advanced JS',
    description: 'Description of Course 3',
    duration: 90,
    creationTime: today,
  },
];
describe('FilterPipe', () => {
  it('should filter course with basics in title', () => {
    const pipe = new FilterPipe();
    expect(pipe.transform(courses, 'Basics')).toEqual([courses[0], courses[1]]);
  });
});
