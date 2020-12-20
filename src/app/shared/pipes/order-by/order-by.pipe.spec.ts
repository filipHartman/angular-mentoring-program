import { Course } from '@interfaces/course';
import { futureDate, today, twoWeeksBefore } from 'app/shared/testUtils';
import { OrderByPipe } from './order-by.pipe';

const courses: Course[] = [
  {
    id: 'course1',
    name: 'Course 1. Basics of HTML',
    description: 'Description of Course 1',
    length: 90,
    date: twoWeeksBefore,
  },
  {
    id: 'course2',
    name: 'Course 2. Basics of CSS',
    description: 'Description of Course 2',
    length: 90,
    date: futureDate,
  },
  {
    id: 'course3',
    name: 'Course 3. Advanced JS',
    description: 'Description of Course 3',
    length: 90,
    date: today,
  },
];
describe('OrderByPipe', () => {
  it('create an instance', () => {
    const pipe = new OrderByPipe();
    expect(pipe.transform(courses)).toEqual([
      courses[0],
      courses[2],
      courses[1],
    ]);
  });
});
