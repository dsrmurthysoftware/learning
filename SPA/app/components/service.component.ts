import {Component} from '@angular/core';
@Component({
  selector: 'service',
  template: `<h1 class="mycolor">We offer Corporate Training services</h1>
  <h3 >
   <h3 class="well text-danger">Technologies</h3>
   <ul>
      <li>Dotnet Core</li>
      <li>Angular js and Angular 2.0/4.0</li>
      <li>Node JS </li>
   </ul>
   </h3>
  `,
  styles: ['.mycolor {background: cyan}']
})
export class ServiceComponent{
  
}