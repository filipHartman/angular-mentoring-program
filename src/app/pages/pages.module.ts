import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AddCourseModule } from './add-course/add-course.module';
import { CoursesModule } from './courses/courses.module';
import { ErrorModule } from './error/error.module';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginModule,
    CoursesModule,
    AddCourseModule,
    ErrorModule,
  ],
  exports: [LoginModule, CoursesModule, AddCourseModule, ErrorModule],
})
export class PagesModule {}
