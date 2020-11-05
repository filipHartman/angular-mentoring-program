import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FilterPipe } from './filter/filter.pipe';
import { HoursFromMinutesPipe } from './hours-from-minutes/hours-from-minutes.pipe';
import { OrderByPipe } from './order-by/order-by.pipe';

@NgModule({
  declarations: [HoursFromMinutesPipe, OrderByPipe, FilterPipe],
  exports: [HoursFromMinutesPipe, OrderByPipe, FilterPipe],
  imports: [CommonModule],
})
export class PipesModule {}
