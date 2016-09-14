import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';

@Component({
    selector: 'register-form',
    templateUrl: './app/user/register.html'
})
export class RegisterComponent {
  private user:User;

  constructor(private userService: UserService) {
    this.user = {username: '', password: ''};
  }

  register(): void {
    console.log('REGISTER CALLED WITH', this.user);

    // NOTE, this is a cold observable, without subscribe, has no effect.
    this.userService.register(this.user)
      .subscribe(
        response => console.log('RESPONSE ', response),
        error => console.log('ERROR ', error)
      );
  }
}
