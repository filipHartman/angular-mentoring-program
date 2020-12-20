import { Course } from '@interfaces/course';
import { today } from './../../testUtils/index';
import { FilterPipe } from './filter.pipe';

const courses: Course[] = [
  {
    id: 'course1',
    name: 'Course 1. Basics of HTML',
    description: 'Description of Course 1',
    length: 90,
    date: today,
  },
  {
    id: 'course2',
    name: 'Course 2. Basics of CSS',
    description: 'Description of Course 2',
    length: 90,
    date: today,
  },

  {
    id: 'course3',
    name: 'Course 3. Advanced JS',
    description: 'Description of Course 3',
    length: 90,
    date: today,
  },
];
describe('FilterPipe', () => {
  it('should filter course with basics in title', () => {
    const pipe = new FilterPipe();
    expect(pipe.transform(courses, 'Basics')).toEqual([courses[0], courses[1]]);
  });
});
