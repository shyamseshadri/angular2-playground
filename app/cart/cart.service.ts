import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';

import { Observable }     from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


let headers = new Headers({ 'Content-Type': 'application/json' });
let options = new RequestOptions({ headers: headers });

import { Cart } from './cart';

@Injectable()
export class CartService {

  constructor(private http: Http) {}

  getCart(): Observable<Cart> {
    return this.http.get('/api/cart')
        .map(res => res.json() || {})
        .catch(error => {
          console.log('ERROR ', error.json());
          let errMsg = (error.json().msg) ? error.json().msg :
              error.status ? `${error.status} - ${error.statusText}` : 'Server error';

          return Observable.throw(errMsg);
        });
  }
}
