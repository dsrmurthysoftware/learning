import { Component } from '@angular/core';

@Component({
    selector: 'app-test',
    template: `
    <h2 style='background-color:orange'>
              Angular Directives with Modules
    </h2>  
   
  <h3 [myHidden]="flag" style='background:lightblue'>  
	   <div>
        Welcome to Hidden Custom Attribute Directive
     </div>
  </h3>
 
  
  <div class="hover-focus" >Murthy Infotek  Greets you! </div>
   <br/>
    <h2>Pipes Demo</h2>
  <div style='background-color:yellow'>
     <h2>Enter Temperature</h2>
       <input type='text' [(ngModel)] = "temp">
       <button (click)="toggleFormat()">Toggle Format</button>
       <br/>
       <h3 style='background-color:lightgreen'>
          In {{targetFormat}} the temperature is
              {{ temp | temperature:format | number:'1.1-2'}}
       </h3>     
  </div>	
    `
})
export class TestComponent {
  flag:boolean =false;  // This is for myHidden Directive

  // this code is for temperature pipe
 temp: number=40;
 toCelsius: boolean=true;
 targetFormat: string ='Celsius';
 format: string='FtoC';

 toggleFormat(){   
   this.toCelsius = !this.toCelsius;
   this.format = this.toCelsius ? 'FtoC': 'CtoF';
   this.targetFormat = 
       this.toCelsius ?'Celsius' : 'Fahrenheit';
 }	 

   familyDetails:boolean=false;
   details(){
     this.familyDetails=!this.familyDetails;
   }
  
 }

 /*
Add below code in tempalte  for *myIf
 
  <h2>Conditional directive Demo</h2>
  <hr/>
  <h2 style='background-color:lightblue'>Structuctural Directive</h2>
    <button (click)="details()">Add Family Details</button>
     
    <h3 *myIf="familyDetails" style='background-color:lightgreen'>
      Submit Family Details please.....
    </h3>


 */