import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@services/auth/auth.service';
import { exampleLogin, exampleUser } from 'app/shared/testUtils';

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
    if (
      this.email.value === exampleLogin.email &&
      this.password.value === exampleLogin.password
    ) {
      this.auth.login(exampleUser);
      this.router.navigateByUrl('courses');
    } else {
      alert('Wrong credentials!!! Try again!!!');
    }
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
