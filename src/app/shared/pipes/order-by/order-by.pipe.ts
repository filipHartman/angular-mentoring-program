import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '@interfaces/course';
import { compareAsc } from 'date-fns';

@Pipe({
  name: 'appOrderBy',
})
export class OrderByPipe implements PipeTransform {
  transform(courses: Course[]): Course[] {
    const newArr = courses.slice();
    return newArr.sort((course, other) =>
      compareAsc(course.creationTime, other.creationTime),
    );
  }
}
