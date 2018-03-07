//Router guard

/*

Intercepting before routing occurs with rules and roles:

The router supports the following kinds of guards:

There are four different types of Guards:
CanActivate
        - Checks to see if a user can visit a route.
CanActivateChild
        - Checks to see if a user can visit a routes children.
CanDeactivate
        -  Checks to see if a user can exit a route.
Resolve
   - Performs route data retrieval before route activation.
   (users Observerable/Promise)
CanLoad
    - Checks to see if a user can route to a module that
     lazy loaded.



$ ng g guard intercept
    create src\app\intercept.guard.spec.ts
    create src\app\intercept.gurd.ts

    observe intercept.guard.ts code    
*/

import {CanActivate} from "@angular/router";

export class AlwaysAuthGuard implements CanActivate {
  canActivate() {
    console.log("I am AlwaysAuthGuard");
    return true;
  }
}
