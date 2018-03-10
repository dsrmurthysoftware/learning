import {Component} from '@angular/core'
import {ComponentFactoryResolver,ViewContainerRef} 
     from '@angular/core'

import {GreetComponent} from './greet.component'

@Component({
    selector: 'app-hellohome',
    template: `
        <h1 class="well text-center">This is Home Component</h1>
        <button (click)="greet()">Greet with message</button>
    `
})
export class HomeComponent {
	constructor(private componentFactoryResolver: ComponentFactoryResolver,
                private viewContainerRef: ViewContainerRef) {
    }

    private greet() {
        const factory = 
        this.componentFactoryResolver.resolveComponentFactory(GreetComponent);
        const ref = this.viewContainerRef.createComponent(factory);
        ref.changeDetectorRef.detectChanges();
    }

}
/*
•	ComponentFactoryResolver — service used to get the factory of the component we want to inject
•	ViewContainerRef — the container of the parent of our component.
•	createComponent(factory) is the part that actually injects our component into the viewContainerRef that calls it.
•	ref — Reference of the component we just injected. We call detectChanges on it so angular will call the necessary lifecycle hooks and start the change detection mechanism.

Also observe Angury plugin for proof that dynamically how injected 
with injector Graph

Note : add below code 
@NgModule({
    declarations: [HomeComponent, GreetComponent],
    entryComponents: [GreetComponent],
    providers: [GreetService],
    exports: [GreeteComponent]
})
export class HomeModule {
}

*/