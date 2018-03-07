import { Component } from '@angular/core';
//Component Directive
@Component({
    selector: 'latest-news',
    template: `
    <h3 class="well">Template Binding (Nested Component)</h3>
    <br/>
    <button (click)="flag = !flag" class="btn btn-primary">
       Latest Angular news
    </button>

    <h2>    
      <span *ngIf="flag">
          <div style="background-color:orange">
          Angular 4.0 is out now!</div>
      </span>
    </h2>   
 
  ` 
})
export class NestedComponent {
    flag: boolean = false;
}










