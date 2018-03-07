import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import {ContactListComponent} from 
      './contact/contactlist.component';
import { ContactDetailsComponent } from 
      './contact/contactdetails.component';
      
@NgModule({
  imports: [ CommonModule,FormsModule],
  declarations: [
  			ContactDetailsComponent,
  			ContactListComponent
  			],
  exports:[
  			ContactDetailsComponent,
  			ContactListComponent
  			]
})
export class ContactModule { }
