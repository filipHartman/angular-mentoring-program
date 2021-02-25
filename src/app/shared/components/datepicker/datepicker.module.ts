import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DatepickerComponent } from './datepicker.component';

@NgModule({
  declarations: [DatepickerComponent],
  exports: [DatepickerComponent],
  imports: [CommonModule],
})
export class DatepickerModule {}
