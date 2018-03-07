//@ViewChildren —
// Returns the specified elements or directives 
//from the view DOM as QueryList



import {Component,Input,ViewChildren,QueryList,ElementRef} 
        from '@angular/core'

@Component({
  selector: 'alert',
  template: `
    <h1 (click)="alert()">{{type}}</h1>
  `,
})
export class AlertComponent {
  @Input() type: string = "Home Loan Account";
  
  alert() {
    console.log("Happy Banking");
  }
  
}

@Component({
  selector: 'app-viewchildren',
  template: `
    <alert></alert>
    <alert type="Savings Account"></alert>
    <alert type="Current Account"></alert>
    <div #mydiv>#mydiv is a template variable</div>

  `,
})
export class ViewChildrenComponent {
  @ViewChildren(AlertComponent) alerts: QueryList<AlertComponent>
  //you can also ask other elements
  //@ViewChildren(AlertComponent,{ read: ElementRef }) 
  //           element_alerts: QueryList<AlertComponent>

  //When the parameter is a component/directive the
  // return value will be the component/directive instance.
  @ViewChildren("mydiv") divs: QueryList<any>
   

//Note : he QueryList is initialized only before the
// ngAfterViewInit lifecycle hook, 
//therefore, is available only from this point.
  ngAfterViewInit() {
    this.alerts.forEach(
    	(alertInstance) => console.log(alertInstance));

    this.divs.forEach(div => console.log(div));
  }

  //When the parameter is the name of a template variable, 
  //the return value will be a reference to the native element.
}



/*

QueryList implements an iterable interface,
it can be used in Angular templates with the ngFor directive. 

QueryList API —

Getters —
	first — get the first item
	last — get the last item
	length — get the items length

Methods —
map(), filter() , find(), reduce(), forEach(), some().
toArray() — returns the items as javascript array
changes() — Changes can be observed by subscribing
 to the changes Observable. Any time a child element
  is added, removed, or moved, the query list will be updated, 
  and the  changes observable of the query list will 
  emit a new value.

*/