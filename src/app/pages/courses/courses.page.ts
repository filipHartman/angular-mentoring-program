import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { Course } from '@interfaces/course';
import { CoursesService } from '@services/courses.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.page.html',
  styleUrls: ['./courses.page.scss'],
})
export class CoursesComponent {
  searchControl = new FormControl('');

  constructor(private readonly coursesService: CoursesService) {}

  get courses$(): Observable<Course[]> {
    return this.coursesService.courses$;
  }

  addCourseIcon = faPlusCircle;

  onCardDelete(course: Course): void {
    console.log('delete ', course.id);
  }

  onAddItem(): void {
    console.log('add item');
  }

  onLoadMore(): void {
    console.log('load more');
  }
}
