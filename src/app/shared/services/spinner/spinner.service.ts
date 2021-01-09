import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  private isSpinnerNeeded = new BehaviorSubject<boolean>(false);
  isSpinnerNeeded$ = this.isSpinnerNeeded.asObservable();

  showSpinner() {
    this.isSpinnerNeeded.next(true);
  }
  hideSpinner() {
    this.isSpinnerNeeded.next(false);
  }
}
