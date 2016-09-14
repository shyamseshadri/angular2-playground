import { Injectable }             from '@angular/core';
import { CanActivate, Router,
         ActivatedRouteSnapshot,
         RouterStateSnapshot }    from '@angular/router';
import { UserService }            from '../user/user.service';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|boolean {
    console.log('Checking if can activate');
    if (this.userService.isLoggedIn) {
      console.log('User is logged in!!');
      return true;
    }

    return this.userService.asyncIsLoggedIn();
  }
}
