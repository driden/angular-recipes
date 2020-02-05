import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

import { AuthService, AuthResponse } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent {
  isLoginMode = true;
  isLoading = false;
  error: string = null;

  constructor(private authService: AuthService, private router: Router) {}

  switchMode = () => (this.isLoginMode = !this.isLoginMode);

  onSubmit(authForm: NgForm) {
    if (!authForm.valid) {
      return;
    }

    this.error = null;
    this.isLoading = true;
    const email = authForm.value.email;
    const password = authForm.value.password;
    let authObs: Observable<AuthResponse>;

    if (this.isLoginMode) {
      authObs = this.authService.login(email, password);
    } else {
      authObs = this.authService.signup(email, password);
    }

    authObs.subscribe(
      _ => {
        this.isLoading = false;
        this.router.navigate(['/recipes']);
      },
      errorMessage => {
        this.error = errorMessage;
        this.isLoading = false;
      }
    );
    authForm.reset();
  }
}
