import { Component } from '@angular/core';
import { 
  FormBuilder,  FormControl,  FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formbuilder',
  templateUrl: './formbinding.html'
})
export class FormBuilderComponent {
  username:string;
  ssn:any;
  formModel: FormGroup;
  constructor(fb: FormBuilder) {
    this.formModel = fb.group({
      'username': [''],
      'ssn': [''],
      'passwordsGroup': fb.group({
        'password': [''],
        'pconfirm': ['']
      })
    });
  }

  onSubmit() {
    this.username=this.formModel.value.username;
    this.ssn=this.formModel.value.ssn;

    console.log("password : "+ 
       this.formModel.value.passwordsGroup.password)    
    console.log(this.formModel.value);  // Entire JSON
  }
}
