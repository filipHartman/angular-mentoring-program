import { Component } from '@angular/core';
import { AuthService } from '@services/auth/auth.service';

@Component({
  selector: 'app-page-container',
  templateUrl: './page-container.component.html',
  styleUrls: ['./page-container.component.scss'],
})
export class PageContainerComponent {
  constructor(private readonly auth: AuthService) {}

  get isAuthenticated(): boolean {
    return this.auth.isAuthenticated();
  }
}
