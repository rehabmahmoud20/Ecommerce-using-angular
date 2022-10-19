import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductDetails } from '../interfaces/product-details';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

import { deleteProduct } from '../favouriteList/favorite.action';
import { ProductscartService } from '../services/productscart.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
})
export class WishlistComponent implements OnInit {
  trash: any = faTrash;
  fav: boolean = true;
  cart: any = faCartShopping;
  productsPrice: number = 0;
  productsCount: number = 0;

  totalFavoritProCount: number = 0;
  favouriteArray: Array<ProductDetails> = [];
  favouritsNum: number = 0; //nav bar cart value
  constructor(
    private _ProductscartService: ProductscartService,
    private _Store: Store<{
      addFavourite: {
        items: any;
      };
    }>
  ) {}

  ngOnInit(): void {
    this._ProductscartService.favoCountVal.subscribe(
      (val) => (this.productsCount = val)
    );
    // update the cart value of the nav bar
    this._ProductscartService.conterterValue.subscribe(
      (val) => (this.favouritsNum = val)
    );

    this._Store
      .select('addFavourite')
      .subscribe((res) => (this.favouriteArray = res.items.slice()));
  }
  // handel remove from favourite
  remove(product: ProductDetails) {
    // remove the item from array
    let ProdIndex = this.favouriteArray.indexOf(product);
    this.favouriteArray.splice(ProdIndex, 1);
    // update the cart value of the nav bar upon delete
    this._ProductscartService.changeCounterValue(0);
    // update the date of the reducer
    this._Store.dispatch(deleteProduct({ product: this.favouriteArray }));

    this.favouritsNum = this.favouriteArray.length;

    // change the count of fav produc items
    this._ProductscartService.changeFavoriteCount(this.favouriteArray.length);
    // change the heart
    this._ProductscartService.changeHeartVal(false);
    product.case = this.fav; //FIXME
  }
  addToCart(product: ProductDetails) {
    this._ProductscartService.changeCounterValue(1);
    this._ProductscartService.setProductsCards({ ...product, quantity: 0 });
    this.productsPrice = this._ProductscartService.changeProductsPrice(product);
  }
}
