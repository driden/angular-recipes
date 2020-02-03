import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent {
  isLoginMode = false;
  isLoading = false;
  error: string = null;

  constructor(private authService: AuthService) {}

  switchMode = () => (this.isLoginMode = !this.isLoginMode);

  onSubmit(authForm: NgForm) {
    if (!authForm.valid) {
      return;
    }

    this.isLoading = true;
    const email = authForm.value.email;
    const password = authForm.value.password;

    if (this.isLoginMode) {
    } else {
      this.authService
        .signup(email, password)
        .subscribe(this.log, errorMessage => {
          console.log(errorMessage);
          this.error = errorMessage;
          this.isLoading = false;
        });
    }
    authForm.reset();
  }

  private log(something: any) {
    console.log(something);
    this.isLoading = false;
  }
}
