import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, switchMap, tap, throwError } from 'rxjs';
import { AuthResponse, AuthService } from '../services/auth.service';
import { TokenService } from '../services/token.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private auth: AuthService,
    private tokenService: TokenService,
    private router: Router
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const accessToken = this.tokenService.getAccessToken();
    let request = req;

    if (accessToken) {
      request = req.clone({
        setHeaders: { Authorization: `Bearer ${accessToken}` },
      });
    }

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          return this.refreshToken().pipe(
            switchMap((response: AuthResponse) => {
              request = req.clone({
                setHeaders: { Authorization: `Bearer ${response.accessToken}` },
              });
              return next.handle(request);
            }),
            catchError(() => {
              this.auth.logout();
              this.router.navigate(['/login']);
              return throwError(() => new Error('Unauthorized'));
            })
          );
        }
        return throwError(() => error);
      })
    );
  }

  private refreshToken(): Observable<AuthResponse> {
    return this.auth.refreshToken().pipe(
      tap((newToken) => {
        this.tokenService.setAccessToken(newToken.accessToken);
        this.tokenService.setRefreshToken(newToken.refreshToken);
      })
    );
  }
}
