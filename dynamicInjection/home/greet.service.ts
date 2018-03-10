import {Injectable} from '@angular/core'

@Injectable()
export class GreetService {
    private message:string = "Welcome to Dynamic Injection in Angular";

    greet():string {
        return this.message;
    }
}
