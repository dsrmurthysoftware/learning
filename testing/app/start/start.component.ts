import { Component } from '@angular/core';

@Component({
  selector: 'app-start',
  template: '',
})
export class StartComponent {
  name:string;
  constructor(data:string){
      this.name='Welcome '+data;
  }
}