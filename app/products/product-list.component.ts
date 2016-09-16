import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
    selector: 'product-list',
    template: `
      <div class="row">
        <product-list-item *ngFor="let product of products"
                           [product]="product"
                           (whenProductSelect)="onProductSelect($event)"
                           ></product-list-item>
      </div>
    `
})
export class ProductListComponent implements OnInit {

  products: Product[];
  selectedProduct: Product;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts()
        .then(products => this.products = products);
  }

  onProductSelect(product: Product) {
    console.log('Product selected', product);
    //this.selectedProduct = this.productService.getProduct(product.id);
  }
}
