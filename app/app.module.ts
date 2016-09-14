import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { FormsModule }   from '@angular/forms';


import { AppComponent }  from './app.component';

import { ProductListComponent } from './products/product-list.component';
import { ProductListItemComponent } from './products/product-list-item.component';
import { ProductDetailComponent } from './products/product-detail.component';

import { LoginComponent } from './user/login.component';
import { RegisterComponent } from './user/register.component';

import { CartComponent } from './cart/cart.component';

import { ProductService } from './products/product.service';
import { UserService } from './user/user.service';
import { CartService } from './cart/cart.service';
import { AuthGuard } from './cart/auth-guard.service';
import { LazyAuthGuard } from './cart/lazy-auth-guard.service';

import { routing } from './app.routing';


@NgModule({
  imports: [ BrowserModule, HttpModule, FormsModule, routing ],
  declarations: [ AppComponent, ProductListItemComponent, ProductDetailComponent, ProductListComponent, LoginComponent, RegisterComponent, CartComponent ],
  providers: [ProductService, UserService, AuthGuard, LazyAuthGuard, CartService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
