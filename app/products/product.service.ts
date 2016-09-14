import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Product } from './product';

const PRODUCTS: Product[] = [
  {id: 1, name: "My First Product", description: "This is the first amazing product", price: 800, isSoldOut: false, imgUrl: 'test'},
  {id: 2, name: "My Second Product", description: "This is the second amazing product", price: 80, isSoldOut: false, imgUrl: 'test'},
  {id: 3, name: "My Third Product", description: "This is the third amazing product", price: 322, isSoldOut: true, imgUrl: 'test'},
  {id: 4, name: "My Fourth Product", description: "This is the fourth amazing product", price: 424, isSoldOut: false, imgUrl: 'test'}
];

@Injectable()
export class ProductService {

  constructor(private http: Http) {}

  getProducts(): Promise<Product[]> {
    return this.http.get('/api/products')
        .toPromise()
        .then(response => response.json() as Product[])
        .catch(this.handleError);
    //return PRODUCTS;
  }

  getProduct(id: number): Promise<Product> {
    return this.http.get('/api/products/' + id)
          .toPromise()
          .then(response => response.json() as Product)
          .catch(this.handleError);
//    let elementPos = PRODUCTS.map(function(product) {return product.id; }).indexOf(id);
//    return PRODUCTS[elementPos];
  }

    private handleError(error: any): Promise<any> {
      console.error('An error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
    }
}
