import { Component, OnInit } from '@angular/core';
import { Cart } from './cart';
import { CartService } from './cart.service';

@Component({
    selector: 'cart',
    templateUrl: './app/cart/cart.html'
})
export class CartComponent implements OnInit {
  private cart:Cart;
  constructor(private cartService: CartService) {}

  ngOnInit() {
  }
}
