import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CoursesService } from '@services/courses/courses.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.page.html',
  styleUrls: ['./add-course.page.scss'],
})
export class AddCourseComponent {
  addCourseForm: FormGroup = this.createForm();

  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private readonly coursesService: CoursesService,
  ) {}

  createForm(): FormGroup {
    return this.fb.group({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      duration: new FormControl('', Validators.required),
    });
  }

  get title(): FormControl {
    return this.addCourseForm.get('title') as FormControl;
  }

  get description(): FormControl {
    return this.addCourseForm.get('description') as FormControl;
  }

  get date(): FormControl {
    return this.addCourseForm.get('date') as FormControl;
  }

  get duration(): FormControl {
    return this.addCourseForm.get('duration') as FormControl;
  }

  onSubmit(): void {
    if (this.addCourseForm.valid) {
      this.coursesService.createCourse({
        id: this.coursesService.getCurrentId(),
        title: this.title.value,
        description: this.description.value,
        duration: this.duration.value,
        creationTime: new Date(this.date.value),
      });
      this.router.navigateByUrl('courses');
    } else {
      alert('You missed something!');
    }
  }

  onCancel(): void {
    this.router.navigateByUrl('courses');
  }
}
