import {Injectable} from '@angular/core';
import {CONTACTS} from './mock-contact'; 

@Injectable() 
export class ContactService {
  error:boolean=false; 
  
     getContacts(){
       return new Promise((resolve, reject) => {
         //mocking for deferred data
        setTimeout(() => {
            // make ajax call here to invoke RESTful Service
          if (this.error) {
            reject('Sorry.. can not fetch Contacts ');
          } else {
                  resolve(CONTACTS);
             }  
        }, 1000);
      });
    }
}
