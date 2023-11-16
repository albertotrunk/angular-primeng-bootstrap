// auth.service.ts
/**
 * The application should be self-contained, without requiring access to any backend
 * The only external data provider allowed is the provided JSON file
 * The application must have a login page with mock validation
 * username === 'admin' && password === 'root'

 * The application must have a login page with mock validation where
 *    a. It returns an error if the username and password are not valid.
 *    b. It directs the user to the "welcome" page if the login is successful.
 **/
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor(private router: Router, private messageService: MessageService) {}

  login(username: string, password: string): boolean {
    // Perform authentication logic
    if (username === 'admin' && password === 'root') {
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('token', 'yourAuthToken');
      this.isAuthenticatedSubject.next(true);
      this.router.navigate(['/welcome']);
      return true;
    } else {
      localStorage.removeItem('isAuthenticated');
      localStorage.removeItem('token');
      this.isAuthenticatedSubject.next(false);
      this.messageService.add({severity: 'error', summary: 'Error', detail: 'Invalid username or password'});
      return false;
    }
  }

  logout(): void {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('token');
    this.isAuthenticatedSubject.next(false);
    this.router.navigate(['/login']);
  }

  getAuthenticated(): boolean {
    return JSON.parse(localStorage.getItem('isAuthenticated') || 'false');
  }
}
