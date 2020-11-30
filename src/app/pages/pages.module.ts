import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AddCourseModule } from './add-course/add-course.module';
import { CoursesModule } from './courses/courses.module';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, LoginModule, CoursesModule, AddCourseModule],
  exports: [LoginModule, CoursesModule, AddCourseModule],
})
export class PagesModule {}
