import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'login-form',
    templateUrl: './app/user/login.html'
})
export class LoginComponent {
  private user:User;

  constructor(private userService: UserService, private router: Router) {
    this.user = {username: '', password: ''};
  }

  login(): void {

    // NOTE, this is a cold observable, without subscribe, has no effect.
    this.userService.login(this.user)
      .subscribe(
        response => {
          console.log('RESPONSE ', this.userService, response, this.router);
          this.router.navigate(['/cart']).then(
            suc => console.log("SUCCESS NAVIGATE", suc),
            err => console.error("ERROR NAVIGATE", err)
          );
        },
        error => console.log('ERROR ', this.userService.isLoggedIn, error)
      );
  }
}
