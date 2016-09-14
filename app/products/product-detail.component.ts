import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';


import { Product } from './product';
import { ProductService } from './product.service';

@Component({
    selector: 'product-detail',
    templateUrl: './app/products/product-detail.html'
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  constructor(private productService: ProductService,
              private route: ActivatedRoute) {}


  ngOnInit(): void {
   this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.productService.getProduct(id)
        .then(product => this.product = product);
    });
  }
}
