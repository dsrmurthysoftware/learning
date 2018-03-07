import { Injectable } from '@angular/core';

import {UserInfo} from './UserInfo';

@Injectable()
export class LoginService {

  constructor() { }
  
  CheckUser(user:UserInfo):boolean{
  if(user.userName=='murthy' && user.password=='welcome'){
    return true;
  }else{
    return false;
  }
  
  }
}
