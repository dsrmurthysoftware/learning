import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {HomeComponent} from './home.component'
import {GreetComponent} from './greet.component'
import {GreetService} from './greet.service'

@NgModule({
	imports:[CommonModule],
    declarations: [HomeComponent,GreetComponent],
    exports: [HomeComponent],
    entryComponents: [GreetComponent], // this is required for dynamic injection
    providers: [GreetService],
})
export class HomeModule {
}
