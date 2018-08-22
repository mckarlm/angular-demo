import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { AuthService } from '../../services/auth.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  loginFormData: {
    username: string
  } = {
      username: ''
    };

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  login() {
    // becomes a Promise, because login() is 
    // a Promise in auth.service.ts
    return this.auth.login(this.loginFormData)
      .then(() => {
        console.log('User logged in')
      })
      .then(() => {
        this.router.navigate(['/'])
      })
      .catch(err => {
        console.log('err: ', err)
      })
  }
}
