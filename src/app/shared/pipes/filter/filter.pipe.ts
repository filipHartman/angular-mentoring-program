import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '@interfaces/course';

@Pipe({
  name: 'appFilter',
})
export class FilterPipe implements PipeTransform {
  transform(courses: Course[], text: string): Course[] {
    return courses.filter(
      (course) =>
        course.name.toLowerCase().includes(text.toLowerCase()) ||
        course.description.toLowerCase().includes(text.toLowerCase()),
    );
  }
}
