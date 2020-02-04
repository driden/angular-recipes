import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { authUrl } from './firebaseAuthConfig';

interface AuthResponse {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  localId: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}

  signup(email: string, password: string): Observable<AuthResponse> {
    return this.http
      .post<AuthResponse>(authUrl, {
        email,
        password,
        returnSecureToken: true
      })
      .pipe(
        catchError(errorRes => {
          let errorMsg = 'An unknown error occurred';
          if (!errorRes.error || !errorRes.error.error) {
            return throwError(errorMsg);
          }
          switch (errorRes.error.error.message) {
            case 'EMAIL_EXISTS':
              errorMsg = 'This email already exists!';
              break;
            // case 'EMAIL_NOT_FOUND':
            //   break;
            // case 'INVALID_PASSWORD':
            //   break;
          }
          return throwError(errorMsg);
        })
      );
  }
}
