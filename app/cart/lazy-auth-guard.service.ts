import { Injectable }             from '@angular/core';
import { CanActivate, Router,
         ActivatedRouteSnapshot,
         RouterStateSnapshot }    from '@angular/router';
import { UserService }            from '../user/user.service';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class LazyAuthGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean>{
    console.log('Checking Async');
    return this.userService.asyncIsLoggedIn();
  }
}
