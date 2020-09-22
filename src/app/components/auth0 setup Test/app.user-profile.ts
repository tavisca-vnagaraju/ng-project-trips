import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-user-profile',
  template: `
    <h1>Welcome</h1>
    <ul *ngIf="auth.user$ | async as user">
    <img src="{{user.picture}}" alt="" srcset="">
      <li>{{ user.name }}</li>
      <li>{{ user.email }}</li>
    </ul>`
})
export class UserProfileComponent {
  constructor(public auth: AuthService) {
    console.log(auth.user$);
    auth.user$.subscribe(val =>console.log(val));
  }
}