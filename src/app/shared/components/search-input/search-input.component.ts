import {
  AfterViewInit,
  Component,
  ElementRef,
  forwardRef,
  ViewChild,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CoursesService } from '@services/courses/courses.service';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SearchInputComponent),
      multi: true,
    },
  ],
})
export class SearchInputComponent
  implements AfterViewInit, ControlValueAccessor {
  @ViewChild('searchInput', { static: false }) input: ElementRef;

  constructor(private readonly courses: CoursesService) {}
  public value = '';
  public disabled: boolean;

  onChanged: any = () => {};
  onTouched: any = () => {};

  writeValue(val: string): void {
    this.value = val;
  }

  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  ngAfterViewInit(): void {
    const inputEl: HTMLInputElement = this.input.nativeElement;
    fromEvent(inputEl, 'keyup')
      .pipe(
        map(() => inputEl.value),
        debounceTime(1000),
        distinctUntilChanged(),
      )
      .subscribe((value) => {
        /**
         * Yeah, I know I should use filter operator but when the length was less than 3
         * after deleting the characters from input, the course list was empty
         */

        if (value.length >= 3) {
          this.courses.searchCoursesByText(value);
        } else {
          this.courses.getCoursesFromBE();
        }
      });
  }
}
