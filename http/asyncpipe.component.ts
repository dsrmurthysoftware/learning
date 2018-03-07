import {Component, OnDestroy} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { Observable } from 'rxjs/Rx';


@Component({
  selector: 'async-pipe',
  template: `
 <div class="card card-block">
  <h4 class="card-title">AsyncPipe with Primise & Observable</h4>

  <h3 class="text-danger bg-info">{{ promise | async }}  </h3>

  <h3 class="bg-success">{{ observable | async }}</h3>

  <h3 class="bg-danger">{{ observableData }}</h3>
 </div>
  `
})
export class AsyncPipeComponent implements OnDestroy {
  promise: Promise<any>;
  observable: Observable<number>;
  subscription: Object = null;
  observableData: number;

  constructor() {
    this.promise = this.getPromise();
    this.observable = this.getObservable();
    this.subscribeObservable();

  }

  getObservable() {
    return Observable
        .interval(1000)
        .take(10)
        .map((v) => v * v);
  }

  // AsyncPipe subscribes to the observable automatically
  subscribeObservable() {
    this.subscription = this.getObservable()
        .subscribe((v) => this.observableData = v);
  }

  getPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve("Promise completed successfully!"), 3000);
    });
  }

  // AsyncPipe unsubscribes from the observable automatically
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription=null;
    }
  }
}


@Component({
  selector: 'app-asyncpipe',
  template: `
  <async-pipe></async-pipe>
 `
})
export class AppPipeComponent {
  imageUrl: string = "";

}


