import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Component, Input, OnInit } from '@angular/core';
import { ProductDetails } from '../interfaces/product-details';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { Store } from '@ngrx/store';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

import { ProductscartService } from '../services/productscart.service';
import { addToFavourite } from '../favouriteList/favorite.action';
import { faGratipay } from '@fortawesome/free-brands-svg-icons';
registerLocaleData(localeFr, 'fr');

@Component({
  selector: 'app-produc-card',
  templateUrl: './produc-card.component.html',
  styleUrls: ['./produc-card.component.scss'],
})
export class ProducCardComponent implements OnInit {
  @Input() product: ProductDetails = {
    name: '',
    image: '',
    count: 0,
    price: '',
    createdAt: '',
    description: '',
    rate: 0,
    id: '',
    reviews: [],
    quantity: 0,
    case: false,
    proPrice:0,
  };
  notFavorite: any = faGratipay;
  favourite: any = faHeart;
  cart: any = faCartShopping;
  fav: boolean = false;
  productsCount: number = 0;
  productsArray: ProductDetails[] = [];
  productPrice: number = 0;
  favouriteArray: ProductDetails[] = [];
  favouriteProductsCount: number = 0;

  constructor(
    private _ProductscartService: ProductscartService,
    private _Store: Store<any>
  ) {}

  ngOnInit(): void {
    this._ProductscartService.conterterValue.subscribe(
      (val) => (this.productsCount = val)
    );

    this._ProductscartService.arrayValue.subscribe((val) => {
      this.productsArray = val;
    });
    this._ProductscartService.totalPrice.subscribe((val) => {
      this.productPrice = val;
    });
   
//!favourit product count
    this._ProductscartService.favoCountVal.subscribe(
      (val) => (this.favouriteProductsCount = val)
    );

    this._ProductscartService.heartValue.subscribe((val) => (this.fav = val));
    this._Store
      .select('addFavourite')
      .subscribe((res) => (this.favouriteArray = res.items.slice()));
  }

  addToFavorite(product: ProductDetails) {
    let state = this.favouriteArray.some((e) => e.id === this.product.id);
    if (!state) {
      this.favouriteArray = [...this.favouriteArray, product];
      this._ProductscartService.changeHeartVal(true);
      this.product.case = this.fav;
    }
    // change the count of fav produc items
    this._ProductscartService.changeFavoriteCount(this.favouriteArray.length);
    this._Store.dispatch(addToFavourite({ product: this.favouriteArray }));
  }

  addToCart(product: ProductDetails) {
    this._ProductscartService.changeCounterValue(++this.productsCount);
    this._ProductscartService.setProductsCards({ ...product,quantity:1});
    // increase the total price 
    this._ProductscartService.changeProductsPrice(parseFloat(product.price),"increase");
  }
}
