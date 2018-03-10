import { Component, NgModule } from '@angular/core'

@Component({
    selector: 'my-test',
    template: `<h1>html template of TestComponent from DynamicModule</h1>`
})

export class TestComponent { }

@NgModule({
    declarations: [TestComponent],
    exports: [TestComponent]
})

export class DynamicModule { }