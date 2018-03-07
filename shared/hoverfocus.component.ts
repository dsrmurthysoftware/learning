import { Directive,HostListener,HostBinding} from '@angular/core';

@Directive({selector: '.hover-focus'})
export class HoverFocusDirective {

  @HostBinding("style.background-color") backgroundColor: string;
  @HostBinding("style.color") color: string;
  @HostBinding("style.font-size") fontSize: string;

  @HostListener('mouseover') onHover() {
    this.backgroundColor = 'red';
    this.color='yellow';
    this.fontSize='40px';
  }

  @HostListener('mouseout') onLeave() {
    this.backgroundColor = 'blue';
    this.color="pink"
        this.fontSize='inherit';
  }
}
