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
  ) {}

  ngOnInit(): void {
    this.courseId = this.route.snapshot.paramMap.get('id');
    if (!!this.courseId) {
      this.coursesService
        .getItemById(this.courseId)
        .pipe(take(1))
        .subscribe(
          (course: Course) => (this.addCourseForm = this.createForm(course)),
        );
    } else {
      this.addCourseForm = this.createForm();
    }
  }

  createForm(course: Course = null): FormGroup {
    return this.fb.group({
      title: new FormControl(course ? course.title : '', Validators.required),
      description: new FormControl(
        course ? course.description : '',
        Validators.required,
      ),
      date: new FormControl(
        course ? format(course.creationTime, 'yyyy-MM-dd') : '',
        Validators.required,
      ),
      duration: new FormControl(
        course ? course.duration : '',
        Validators.required,
      ),
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
      title: this.title.value,
      description: this.description.value,
      duration: this.duration.value,
      creationTime: new Date(this.date.value),
    };
  }
}
