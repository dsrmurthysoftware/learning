import {Component} from '@angular/core';

//load services
import {Contact} from '../services/contact';
import {ContactService} from '../services/contact.service';

import {Session} from '../services/globals';

@Component({
    selector: 'contact-list',    
    providers:[ContactService],
    templateUrl: './contactlist.html' 
})
export class ContactListComponent{
  authenticated:boolean;
  name:string | null;  
  public contacts:Contact[];
  public selected:any={};
  public showDetails:boolean=false;
  
  constructor(
      private _contactService:ContactService  ){ }
  
 ngOnInit(){
     this.name=Session.username;   
     this.authenticated=Session.authenticated;
     
     this._contactService.getContacts()
        .then( (cnts:any) => this.contacts=cnts)
   }
 
  selectedContact(contact:Contact){
  	this.selected=contact.name;    
  	this.showDetails=true;    
  }
}