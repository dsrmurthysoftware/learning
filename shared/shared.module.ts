import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

//Attribute Directive
import { HiddenDirective } from './hidden.directive';
import {TestComponent} from './test.component';

//custom pipe
import {TemperaturePipe} from './temperature.pipe';

//Structural Directive
import { IfDirective } from './if.directive';

// Style based directive
import {HoverFocusDirective} from './hoverfocus.component';

@NgModule({
    imports: [ CommonModule,FormsModule],
    declarations: [
        HiddenDirective, 
        TestComponent,  

        TemperaturePipe,
        
         IfDirective,
         HoverFocusDirective
	   ],
    exports: [
        HiddenDirective,
        TestComponent,      
        
        TemperaturePipe,

	    IfDirective,
        HoverFocusDirective
	    ]
})
export class SharedModule{}






//Now import into our AppModule see app.module.ts

//use imports:[ThirdPartyModules] for loading external modules
//as dependencies