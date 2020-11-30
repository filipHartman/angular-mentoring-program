import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import {
  faCalendar,
  faClock,
  faPencilAlt,
  faStar,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { Course } from '@interfaces/course';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseCardComponent {
  @Output() delete = new EventEmitter<Course>();

  @Input() course: Course;

  editIcon = faPencilAlt;
  deleteIcon = faTrash;
  durationIcon = faClock;
  creationIcon = faCalendar;
  starIcon = faStar;

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

  get topRated(): boolean {
    return this.course.topRated;
  }

  deleteCard(): void {
    this.delete.emit(this.course);
  }
}
