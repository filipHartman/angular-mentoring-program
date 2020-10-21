import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  faCalendar,
  faClock,
  faPencilAlt,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { Course } from '@interfaces/course';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
})
export class CourseCardComponent {
  @Output() delete = new EventEmitter<Course>();

  @Input() course: Course;

  editIcon = faPencilAlt;
  deleteIcon = faTrash;
  durationIcon = faClock;
  creationIcon = faCalendar;

  get id(): string {
    return this.course.id;
  }

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

  deleteCard(): void {
    this.delete.emit(this.course);
  }
}
