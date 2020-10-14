import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hoursFromMinutes',
})
export class HoursFromMinutesPipe implements PipeTransform {
  transform(value: number): string {
    const hours = Math.floor(value / 60);
    const mins = value - hours * 60;
    return `${hours} h ${mins} mins`;
  }
}
