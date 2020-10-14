import { Course } from './../../../shared/interfaces/course';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-courses-container',
  templateUrl: './courses-container.component.html',
  styleUrls: ['./courses-container.component.scss'],
})
export class CoursesContainerComponent {
  @Input() courses: Course[];
}
