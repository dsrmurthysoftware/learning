/*
Attribute directive uses ElementRef and Renderer to 
render and re-render while structural directives use
 TemplateRef and ViewContainerRef to update the DOM 
 content.

The directive has an Input setter that receives a boolean value. If the boolean value resolves to true, we use the ViewContainer's createEmbeddedView method to render the template. We can get hold of the template via the templateRef.
When the the boolean resolves to false,
 we clear the ViewContainer.

The so-called ViewContainer, in this case, 
refers to the structural directive host.
*/


import { Directive,  
       Input, 
       TemplateRef, 
       ViewContainerRef } from '@angular/core';

@Directive({ selector: '[myIf]' })
export class IfDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
    ) { }

  @Input() set myIf(shouldAdd: boolean) {
    if (shouldAdd) {
      // If condition is true add template to DOM
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
     // Else remove template from DOM
      this.viewContainer.clear();
    }
  }

}

