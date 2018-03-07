import { Component, OnInit } from '@angular/core';
import {UserInfo} from './UserInfo';
import {LoginService} from "./login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginService]
})
export class LoginComponent implements OnInit {
  user:UserInfo;
  status:boolean;
  message:string;
  constructor(private loginsvc:LoginService) { 
    this.loginsvc=loginsvc;
  } 

  onSubmit(user:any){
    let u:UserInfo={userName:user.username,password:user.password}
   if(this.loginsvc.CheckUser(u)){
      this.status=true;
      this.message="Welcome to Murthy Infotek";
   }else{
     this.status=false;
     this.message="Sorry... invalid user name or password";
   }
  }

  ngOnInit() { }

}
