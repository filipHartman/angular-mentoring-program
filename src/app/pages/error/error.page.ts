import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SiteMap } from '@enums/site-map.enum';

@Component({
  selector: 'app-error',
  templateUrl: './error.page.html',
  styleUrls: ['./error.page.scss'],
})
export class ErrorComponent {
  constructor(private readonly router: Router) {}

  goToLogin(): void {
    this.router.navigateByUrl(SiteMap.LOGIN);
  }
}
