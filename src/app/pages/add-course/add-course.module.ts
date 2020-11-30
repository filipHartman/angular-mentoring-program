import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from '@pipes/pipes.module';
import { AddCourseComponent } from './add-course.page';

@NgModule({
  declarations: [AddCourseComponent],
  imports: [CommonModule, ReactiveFormsModule, PipesModule],
})
export class AddCourseModule {}
