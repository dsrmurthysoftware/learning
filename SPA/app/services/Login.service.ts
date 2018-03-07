import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

import {User} from './user'
import {Session} from './globals';
//mock
var users = [
  new User('admin@admin.com','welcome'),
  new User('kavitha@gmail.com','hi')
];
 
@Injectable()
export class LoginService {
 private authenticatedUser:User;

  constructor(  private _router: Router){} 
 
  login(user:User){
    this.authenticatedUser = 
      users.find(u => u.username === user.username);

    if (this.authenticatedUser && 
      this.authenticatedUser.password === user.password){
      window.localStorage.setItem("user",this.authenticatedUser.toString());
      //$rootScope
      Session.authenticated=true;
      Session.username=user.username;

      this._router.navigate(['contacts']);  

      return true;
    }
    return false;
 
  }

logout() {
    localStorage.removeItem("user");
    this._router.navigate(['/']);
    Session.authenticated=false;
  }
  
 
   checkCredentials(){
    if (localStorage.getItem("user") === null){
        this._router.navigate(['/']);
    }
  }


}

/*
Route Guard:
   Intercepting before routing occurs with rules and roles:

The router supports the following kinds of guards (taken from the docs) -

1. CanActivate      :  to mediate navigation to a route.
2. CanActivateChild  : to mediate navigation to a child route.
3. CanDeactivate:  to mediate navigation away from the current route.
4. Resolve      :  to perform route data retrieval before route activation.
5. CanLoad : to mediate navigation to a feature module loaded asynchronously.

 import { Injectable }    from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot }
       from '@angular/router';
import { AuthenticationService } from './authentication.service';
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthenticationService) {
}
//Only authenticated users can access view
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.authService.isAuthenticated){
      this.authService.showLogin(state.url);
      return false;
    }
return true;
  }
}
*/
