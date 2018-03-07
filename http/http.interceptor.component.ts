/*
import { Injectable } from '@angular/core';
import {
  Http,
  ConnectionBackend,
  RequestOptions,
  RequestOptionsArgs,
  Response,
  Headers,
  Request
} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';

// Shows Progress bar and notifications
import { NotifyService } from "./loader";

@Injectable()
export class HttpInterceptor extends Http {

  constructor(
    backend: ConnectionBackend,
    defaultOptions: RequestOptions,
    private notifyService: NotifyService
  ) {
    super(backend, defaultOptions);
  }

  
   // Performs a request with `get` http method.
   //@param url
   //@param options
   //@returns {Observable<>}
   
  get(url: string, options?: RequestOptionsArgs): Observable<any> {
    this.beforeRequest();
    return super.get(this.getFullUrl(url), this.requestOptions(options))
      .catch(this.onCatch)
      .do((res: Response) => {
        this.onSuccess(res);
      }, (error: any) => {
        this.onError(error);
      })
      .finally(() => {
        this.onFinally();
      });
  }
    
  // Implement POST, PUT, DELETE HERE

  
   // Request options.
   //@param options
   //@returns {RequestOptionsArgs}
   
  private requestOptions(options?: RequestOptionsArgs): RequestOptionsArgs {
    if (options == null) {
      options = new RequestOptions();
    }
    if (options.headers == null) {
      options.headers = new Headers({
        'Authorization': `Basic ${environment.basic_auth_token}`,
        'X-Auth-Token': localStorage.getItem('access_token')
      });
    }
    return options;
  }

  
   // Build API url.
   //@param url
   //@returns {string}
   
  private getFullUrl(url: string): string {
    return environment.apiEndpoint + url;
  }

  
  // Before any Request.
   
  private beforeRequest(): void {
    this.notifyService.showPreloader();
  }

  
   // After any request.
   
  private afterRequest(): void {
    this.notifyService.hidePreloader();
  }

  
   // Error handler.
   //@param error
   //@param caught
   //@returns {ErrorObservable}
   
  private onCatch(error: any, caught: Observable<any>): Observable<any> {
    this.notifyService.popError();
    return Observable.throw(error);
  }

  
   // onSuccess
   //@param res
   
  private onSuccess(res: Response): void {
    console.log(res);
  }

  
  //onError
   // @param error
   
  private onError(error: any): void {
    this.notifyService.popError();
  }


// onFinally
   
  private onFinally(): void {
    this.afterRequest();
  }
}

// imports here 
// .......

@Injectable()
export class DataService {

  constructor(public http: HttpInterceptor) {};

  getData() {
    return this
      .http.get(`data?limit=20&offset=40`)
      // will hit the api on http://api.localhost.com:4000/data?limit=20&offset=40
      .map(res => res.json().data)
  }

}


*/

