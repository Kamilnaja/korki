import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { ErrorHandlerService } from './error-handler.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  private readonly errorHandlerService: ErrorHandlerService;

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((errResp) => {
        const { status } = errResp;
        if (status === 401) {
          this.errorHandlerService.handleError(errResp);
        } else if (status === 403) {
          this.errorHandlerService.handleLogout();
        }
        return next.handle(request);
      })
    );
  }
}
