// ./app/shared/hidden.directive.ts
//load DOM specific helpers
import { Directive, ElementRef, Input, Renderer } 
       from '@angular/core';

@Directive({ selector: '[myHidden]' })
export class HiddenDirective  {
    constructor(public el: ElementRef, 
    	             public renderer: Renderer) {}

    @Input() myHidden: boolean;
    
    ngOnInit(){
      console.log(this.myHidden);
        if(this.myHidden) {
           this.renderer.setElementStyle(
           	      this.el.nativeElement, 'display', 'none' );
        }
    }
}



