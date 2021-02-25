import { Component } from '@angular/core';
import { AuthService } from '@services/auth/auth.service';
import { SpinnerService } from '@services/spinner/spinner.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-page-container',
  templateUrl: './page-container.component.html',
  styleUrls: ['./page-container.component.scss'],
})
export class PageContainerComponent {
  constructor(
    private readonly auth: AuthService,
    private readonly spinner: SpinnerService,
  ) {}

  get isAuthenticated$(): Observable<boolean> {
    return this.auth.isAuthenticated();
  }

  get showSpinner$(): Observable<boolean> {
    return this.spinner.isSpinnerNeeded$;
  }
}
