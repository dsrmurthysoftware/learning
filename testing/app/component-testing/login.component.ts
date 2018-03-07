import {Component, EventEmitter, Input, Output} from '@angular/core';

export class User { 
  constructor(public email: string, public password: string) {
  }
}

@Component({
  selector: 'app-login',
  template: `
<form>
  <label>Email</label>
  <input type="email"
         #email>
  <label>Password</label>
  <input type="password"
         #password>
  <button type="button" 
          (click)="login(email.value, password.value)"
          [disabled]="!enabled">Login
  </button>
</form>
`
})
export class LoginComponent {
  @Output() loggedIn = new EventEmitter<User>(); 
  @Input() enabled = true; 

  login(email, password) { 
    console.log(`Login ${email} ${password}`);
    if (email && password) {
      console.log(`Emitting`);
      this.loggedIn.emit(new User(email, password));
    }
  }
}
/*

We create a User class which holds the model of a logged in user.
The button is sometimes disabled depending on the enabled input property value and on clicking the button we call the login function.
The component has an output event called loggedIn.
The component has an input property called enabled.
In the login function we emit a new user model on the loggedIn event.

*/