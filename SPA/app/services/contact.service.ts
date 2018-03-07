import {Injectable} from '@angular/core';
import {CONTACTS} from './mock-contacts';
import {Contact} from './contact';

@Injectable()
export class ContactService{

	getContacts(){
		// return http.get(url)
		return Promise.resolve (CONTACTS);
	}

	insertContact(contact:Contact){
		//return  http.post(url,contact)
		Promise.resolve(CONTACTS)
		 .then( (contacts:Contact[] ) => contacts.push(contact))
	}
		//return http.delete(url,contact.name)
}