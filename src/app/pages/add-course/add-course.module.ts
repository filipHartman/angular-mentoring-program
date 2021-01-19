import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DatepickerModule } from '@components/datepicker/datepicker.module';
import { DurationInputModule } from '@components/duration-input/duration-input.module';
import { PipesModule } from '@pipes/pipes.module';
import { AddCourseComponent } from './add-course.page';

@NgModule({
  declarations: [AddCourseComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PipesModule,
    DatepickerModule,
    DurationInputModule,
  ],
})
export class AddCourseModule {}
