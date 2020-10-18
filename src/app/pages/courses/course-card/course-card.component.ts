import { Course } from './../../../shared/interfaces/course';
import { Component, Input } from '@angular/core';
import {
  faCalendar,
  faClock,
  faPencilAlt,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
})
export class CourseCardComponent {
  @Input() course: Course;

  editIcon = faPencilAlt;
  deleteIcon = faTrash;
  durationIcon = faClock;
  creationIcon = faCalendar;

  get title(): string {
    return this.course.title;
  }

  get description(): string {
    return this.course.description;
  }

  get duration(): number {
    return this.course.duration;
  }

  get creationTime(): Date {
    return this.course.creationTime;
  }
}
