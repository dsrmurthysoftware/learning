//@ContentChildren —
//Returns the specified 
//elements or directives from the content DOM as QueryList


import {Component, ContentChildren,Input,QueryList} 
        from '@angular/core';

@Component({
  selector: 'tab',
  template: `
    <h2>I am tab {{title}}</h2>
  `,
})
export class TabComponent {
  @Input() title:string;
}

//This is like Transclusion in Angular js
@Component({
  selector: 'tabs',
  template: `
    <ng-content></ng-content>
  `,
})
export class TabsComponent {
 @ContentChildren(TabComponent) tabs: QueryList<TabComponent>
 
 ngAfterContentInit() {
   this.tabs.forEach(tabInstance => console.log(tabInstance))
 }
}

@Component({
  selector: 'app-contentchildren',
  template: `
    <tabs>
     <tab title="One"></tab>
     <tab title="Two"></tab>
    </tabs>
  `,
})
export class ContentChildrenComponent {}
