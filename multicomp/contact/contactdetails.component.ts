import {Component} from '@angular/core';

@Component({
    selector:   'contact-details',
    template: `
    <h3 class="bg-primary text-success"> Details of Contact :</h3>
    <div>
    <label for="name">Name</label>
    <input type="text" [(ngModel)]="contact.name">
    </div>

    <div>
    <label for="email">Email</label>
    <input type="text" [(ngModel)]="contact.email">
    </div>

    <div>
    <label for="phone">Phone</label>
    <input type="text" [(ngModel)]="contact.phone">
    </div>
    `,
    inputs: ["contact"],
    styles :[`
        label {display:inline-block; width:100px}
        input {width:200px}
      `
    ]
})
export class ContactDetailsComponent{
 public contact:any = {}; 
} // End of code
