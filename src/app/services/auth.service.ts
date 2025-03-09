import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, tap } from 'rxjs';
import { environment } from '../../environments/environment.development';

export interface AuthRequest {
  email: string;
  password: string;
}

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = `${environment.API_URL}/auth`;
  private authStatus = new BehaviorSubject<boolean>(
    !!localStorage.getItem('accessToken')
  );

  constructor(private _http: HttpClient) {}

  login(credentials: AuthRequest) {
    return this._http
      .post<AuthResponse>(`${this.apiUrl}/login`, credentials)
      .pipe(
        tap(({ accessToken, refreshToken }) => {
          localStorage.setItem('accessToken', accessToken);
          localStorage.setItem('refreshToken', refreshToken);
          this.authStatus.next(true);
        })
      );
  }

  signup(credentials: AuthRequest) {
    return this._http
      .post<AuthResponse>(`${this.apiUrl}/signup`, credentials)
      .pipe(
        tap(({ accessToken, refreshToken }) => {
          localStorage.setItem('accessToken', accessToken);
          localStorage.setItem('refreshToken', refreshToken);
          this.authStatus.next(true);
        })
      );
  }

  logout() {
    return this._http
      .post(
        `${this.apiUrl}/logout`,
        {},
        {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
          },
        }
      )
      .pipe(
        tap(() => {
          localStorage.removeItem('accessToken');
          localStorage.removeItem('refreshToken');
          this.authStatus.next(false);
        })
      );
  }

  refreshToken() {
    return this._http
      .post<AuthResponse>(
        `${this.apiUrl}/refresh-token`,
        {},
        {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
          },
        }
      )
      .pipe(
        tap(({ accessToken, refreshToken }) => {
          localStorage.setItem('accessToken', accessToken);
          localStorage.setItem('refreshToken', refreshToken);
        })
      );
  }

  isAuthenticated() {
    return this.authStatus.asObservable();
  }
}
