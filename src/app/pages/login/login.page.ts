import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@services/auth/auth.service';
import { SiteMap } from './../../shared/enums/site-map.enum';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginComponent {
  loginForm: FormGroup = this.createLoginForm();

  constructor(
    private readonly fb: FormBuilder,
    private readonly auth: AuthService,
    private readonly router: Router,
  ) {}

  onSubmit(): void {
    this.auth
      .login({
        login: this.email.value,
        password: this.password.value,
      })
      .subscribe(
        () => {
          this.router.navigateByUrl(SiteMap.COURSES);
        },
        (err) => console.error(err),
      );
  }

  get email(): FormControl {
    return this.loginForm.get('email') as FormControl;
  }

  get password(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }

  createLoginForm(): FormGroup {
    return this.fb.group({
      email: this.fb.control('', Validators.required),
      password: this.fb.control('', Validators.required),
    });
  }
}
