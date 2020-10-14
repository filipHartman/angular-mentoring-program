import { HoursFromMinutesPipe } from './hours-from-minutes.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [HoursFromMinutesPipe],
  exports: [HoursFromMinutesPipe],
  imports: [CommonModule],
})
export class HoursFromMinutesModule {}
