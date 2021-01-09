import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, finalize } from 'rxjs/operators';
import { SpinnerService } from './spinner.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor(private readonly spinner: SpinnerService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    this.spinner.showSpinner();
    return next.handle(request).pipe(
      // Delay added to show spinner for local server
      delay(500),
      finalize(() => this.spinner.hideSpinner()),
    );
  }
}
