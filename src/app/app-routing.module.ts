import { LogInComponent } from './authmodule/log-in/log-in.component';
import { RegisterComponent } from './authmodule/register/register.component';
import { ProducListComponent } from './produc-list/produc-list.component';

import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthinticationGuard } from './gurds/authintication.guard';
import { CanDeactiveteGuard } from './gurds/can-deactivete.guard';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  {
    path: '',
    component: ProducListComponent,
  },
  {
    path: 'home',
    component: ProducListComponent,
    // canActivate: [AuthinticationGuard],
  },
  {
    path: 'wishList',
    component: WishlistComponent,
  },
  {
    path: 'register',
    canDeactivate:[CanDeactiveteGuard],
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LogInComponent,
  },
  {
    path: 'productDetails/:id',
    component: ProductDetailsComponent,
  },
  {
    path: 'shoppingacart',
    component: ShoppingCartComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
