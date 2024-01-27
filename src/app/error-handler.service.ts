import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerService {
  constructor() {}

  handleError(error: any): void {
    console.log(error);
  }

  handleLogout(): void {
    console.log('user logged out');
  }
}
