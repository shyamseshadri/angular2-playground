import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from  './cart/auth-guard.service';
import { LazyAuthGuard } from  './cart/lazy-auth-guard.service';

import { ProductListComponent }      from './products/product-list.component';
import { ProductDetailComponent }      from './products/product-detail.component';

import { LoginComponent } from './user/login.component';
import { RegisterComponent } from './user/register.component';

import { CartComponent } from './cart/cart.component';

const appRoutes: Routes = [
  {
    path: 'products',
    component: ProductListComponent
  },
  {
      path: 'products/:id',
      component: ProductDetailComponent
  },
  {
      path: 'login',
      component: LoginComponent
  },
  {
      path: 'register',
      component: RegisterComponent
  },
  {
      path: 'cart',
      component: CartComponent,
      canActivate: [AuthGuard]
  },
  {
        path: 'slowcart',
        component: CartComponent,
        canActivate: [LazyAuthGuard]
    },
  {
    path: '',
    redirectTo: '/products',
    pathMatch: 'full'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
