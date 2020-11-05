import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { Course } from '@interfaces/course';
import { CoursesService } from '@services/courses.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FilterPipe } from './../../shared/pipes/filter/filter.pipe';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.page.html',
  styleUrls: ['./courses.page.scss'],
})
export class CoursesComponent {
  // tslint:disable-next-line: variable-name
  private _courses$ = this.coursesService.courses$;
  private filterPipe = new FilterPipe();

  searchControl = new FormControl('');

  constructor(private readonly coursesService: CoursesService) {}

  get courses$(): Observable<Course[]> {
    return this._courses$;
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

  onSearchClick(): void {
    const searchValue = this.searchControl.value;
    if (!!searchValue) {
      this._courses$ = this.coursesService.courses$.pipe(
        map((course) => this.filterPipe.transform(course, searchValue)),
      );
    } else {
      this._courses$ = this.coursesService.courses$;
    }
  }
}
