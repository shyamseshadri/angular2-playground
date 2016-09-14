import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
      <h1>My First Angular 2 App</h1>

      <a routerLink="/products">Products</a>
      <a routerLink="/login">Login</a>
      <a routerLink="/register">Register</a>
      <a routerLink="/cart">Cart</a>
      <a routerLink="/slowcart">Slow Cart</a>
      <router-outlet></router-outlet>
    `
})
export class AppComponent {

//  constructor(private productService: ProductService) {}
////
////  selectedProduct: Product;
////
////  onProductSelect(product: Product) {
////    this.selectedProduct = this.productService.getProduct(product.id);
////  }
}
