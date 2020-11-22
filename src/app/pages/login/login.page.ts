import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '@interfaces/user';
import { fromEvent, Subscription } from 'rxjs';
import { LoginUser } from './../../shared/interfaces/user';
import { AuthService } from './../../shared/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginComponent implements AfterViewInit, OnDestroy {
  exampleLogin: LoginUser = {
    email: 'admin',
    password: 'admin',
  };

  exampleUser: User = {
    id: 'user1',
    firstName: 'Grzegorz',
    lastName: 'Brzęczyszczykiewicz',
  };

  @ViewChild('submit', { static: false }) submit: ElementRef;
  subscription: Subscription;
  loginForm: FormGroup = this.createLoginForm();

  constructor(
    private readonly fb: FormBuilder,
    private readonly auth: AuthService,
    private readonly router: Router,
  ) {}

  ngAfterViewInit(): void {
    this.subscription = fromEvent(this.submit.nativeElement, 'click').subscribe(
      () => {
        if (
          this.email.value === this.exampleLogin.email &&
          this.password.value === this.exampleLogin.password
        ) {
          this.auth.login(this.exampleUser);
          this.router.navigateByUrl('courses');
        } else {
          alert('Wrong credentials!!! Try again!!!');
        }
      },
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

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
