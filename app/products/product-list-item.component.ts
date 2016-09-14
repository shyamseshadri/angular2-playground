import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


import { Product } from './product';

@Component({
    selector: 'product-list-item',
    templateUrl: './app/products/product-list-item.html'
})
export class ProductListItemComponent {
  @Input()
  product:Product;

  @Output()
  whenProductSelect: EventEmitter<Product> = new EventEmitter<Product>();

  constructor(private router: Router) {}

  onSelect() {
    this.whenProductSelect.emit(this.product);
    let link = ['/products', this.product.id];
    this.router.navigate(link);
  }
}
