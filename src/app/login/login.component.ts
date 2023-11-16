// login.component.ts
/**
 * The application must have a login page with mock validation
 * username === 'admin' && password === 'root'
 *
 * The application must have a login page with mock validation where
 *    a. It returns an error if the username and password are not valid.
 *    b. It directs the user to the "welcome" page if the login is successful.
**/
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}
  login() {
    this.authService.login(this.username, this.password);
  }

  ngOnInit() {
    this.authService.logout();
  }

}
