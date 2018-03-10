import {Component,AfterViewInit} from '@angular/core'
import {GreetService} from './greet.service'

@Component({
    selector: 'app-greet',
    template: `
        <div>
            Hello {{name}}
            The message is: {{invoke()}}
        </div>
    `
})
export class GreetComponent implements AfterViewInit {
    private name:string = 'No name';

    constructor(private _service: GreetService) {
    }

    ngAfterViewInit(): void {
        this.name = 'Murthy';
    }

    private invoke() {
        return this._service.greet();
    }
}
