import { Course } from '@interfaces/course';
import { futureDate, today, twoWeeksBefore } from 'app/shared/testUtils';
import { OrderByPipe } from './order-by.pipe';

const courses: Course[] = [
  {
    id: 'course1',
    title: 'Course 1. Basics of HTML',
    description: 'Description of Course 1',
    duration: 90,
    creationTime: twoWeeksBefore,
  },
  {
    id: 'course2',
    title: 'Course 2. Basics of CSS',
    description: 'Description of Course 2',
    duration: 90,
    creationTime: futureDate,
  },
  {
    id: 'course3',
    title: 'Course 3. Advanced JS',
    description: 'Description of Course 3',
    duration: 90,
    creationTime: today,
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
