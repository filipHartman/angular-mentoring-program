import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SiteMap } from '@enums/site-map.enum';
import { Course } from '@interfaces/course';
import { CoursesService } from '@services/courses/courses.service';
import { format } from 'date-fns';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.page.html',
  styleUrls: ['./add-course.page.scss'],
})
export class AddCourseComponent implements OnInit {
  addCourseForm: FormGroup;
  courseId: string;

  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private readonly coursesService: CoursesService,
    private readonly route: ActivatedRoute,
  ) {
    this.addCourseForm = this.initializeForm();
  }

  ngOnInit(): void {
    this.courseId = this.route.snapshot.paramMap.get('id');
    if (!!this.courseId) {
      this.coursesService
        .getItemById(this.courseId)
        .pipe(take(1))
        .subscribe((course: Course) => {
          this.updateFormWithCourseData(course);
        });
    }
  }

  private initializeForm(): FormGroup {
    return this.fb.group({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      duration: new FormControl('', Validators.required),
    });
  }
  updateFormWithCourseData(course: Course): void {
    this.title.setValue(course.name);
    this.description.setValue(course.description);
    this.date.setValue(format(course.date.toString(), 'yyyy-MM-dd'));
    this.duration.setValue(course.length);
    this.addCourseForm.updateValueAndValidity();
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
      !!this.courseId
        ? this.coursesService.updateItem(
            this.prepareCourseForSubmit(this.courseId),
          )
        : this.coursesService.createCourse(
            this.prepareCourseForSubmit(this.coursesService.getCurrentId()),
          );
      this.router.navigateByUrl(SiteMap.COURSES);
    } else {
      alert('You missed something!');
    }
  }

  onCancel(): void {
    this.router.navigateByUrl(SiteMap.COURSES);
  }

  private prepareCourseForSubmit(id: string): Course {
    return {
      id,
      name: this.title.value,
      description: this.description.value,
      length: this.duration.value,
      date: new Date(this.date.value),
    };
  }
}
