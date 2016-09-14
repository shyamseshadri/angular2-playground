import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';

import { Observable }     from 'rxjs/Observable';


import { User } from './user';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


//import 'rxjs/add/operator/toPromise';

let headers = new Headers({ 'Content-Type': 'application/json' });
let options = new RequestOptions({ headers: headers });

@Injectable()
export class UserService {

  isLoggedIn: boolean;

  constructor(private http: Http) {
    this.isLoggedIn = false;
  }

  login(userReq: any): Observable<User> {
    let body = JSON.stringify(userReq);
    return this.http.post('/api/users/login', body, options)
        .map(this.extractData)
        .map(this.handleLoginSuccess.bind(this))
        .catch(this.handleError);
  }

  register(userReq: any): Observable<any> {
      let body = JSON.stringify(userReq);
      return this.http.post('/api/users/register', body, options)
          .map(this.extractData)
          .catch(this.handleError);
  }

  asyncIsLoggedIn(): Observable<boolean> {
    return this.http.post('/api/users/isLoggedIn', '{}', options)
        .map(this.handleLoginSuccess.bind(this))
        .map(res => true)
        .catch(this.handleError);
  }

  private extractData(res: Response) : any {
    return res.json() || { };
  }

  private handleLoginSuccess(res: any) : any {
    this.isLoggedIn = true;
    return res;
  }

  private handleError (error: any) : any {
      this.isLoggedIn = false;
      // In a real world app, we might use a remote logging infrastructure
      // We'd also dig deeper into the error to get a better message
      let errMsg = (error.json().msg) ? error.json().msg :
          error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg); // log to console instead
      return Observable.throw(errMsg);
  }
}
