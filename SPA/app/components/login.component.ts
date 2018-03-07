import {Component} from '@angular/core';
import {LoginService} from '../services/login.service'
import {User} from '../services/user'

@Component({
    selector: 'login-form',
    providers: [LoginService],
    templateUrl:'./login.component.html'
}) 
export class LoginComponent {
    status:boolean | null = false;
    public user = new User('admin@admin.com','welcome')
    public errorMsg:any | null = ''
 
    constructor(private _service:LoginService) {}
 
    login() {
        if(!this._service.login(this.user)){
            this.errorMsg = 'Sorry...Invalid Username or Password'
            this.status=false;            
        }else{
            this.status=true;
        }
    }
}