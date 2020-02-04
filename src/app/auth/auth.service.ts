import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { signUpUrl, signInUrl } from './firebaseAuthConfig';

export interface AuthResponse {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  localId: string;
  registered?: boolean;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}

  signup(email: string, password: string): Observable<AuthResponse> {
    return this.http
      .post<AuthResponse>(signUpUrl, {
        email,
        password,
        returnSecureToken: true
      })
      .pipe(catchError(this.handleError));
  }

  login(email: string, password: string) {
    return this.http.post<AuthResponse>(signInUrl, {
      email,
      password,
      returnSecureToken: true
    });
  }

  private handleError(errorResponse: HttpErrorResponse): Observable<never> {
    let errorMsg = 'An unknown error occurred';
    if (!errorResponse.error || !errorResponse.error.error) {
      return throwError(errorMsg);
    }
    switch (errorResponse.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMsg = 'This email already exists!';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMsg = 'This email is not registered!';
        break;
      // case 'INVALID_PASSWORD':
      //   break;
    }
    return throwError(errorMsg);
  }
}
