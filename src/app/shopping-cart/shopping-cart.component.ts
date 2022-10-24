import { Component, OnInit } from '@angular/core';
import { ProductscartService } from '../services/productscart.service';
import { ProductDetails } from '../interfaces/product-details';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {
  prod: ProductDetails[] = [];
  productsTotalPrice: number = 0;
  cartCount: number = 0;
  quantity: any = 0;

  constructor(private _ProductscartService: ProductscartService) {}

  ngOnInit(): void {
    this._ProductscartService.arrayValue.subscribe((val) => {
      this.prod = val;
    });
    this._ProductscartService.conterterValue.subscribe(
      (val) => (this.cartCount = val)
    );
    this._ProductscartService.totalPrice.subscribe((val) => {
      this.productsTotalPrice = val;
    });
    this._ProductscartService.conterterValue.subscribe(
      (val) => (this.cartCount = val)
    );
  }
  // handel the increase amount btn
  increaseAmount(product: ProductDetails) {
    // handel the cart count
    this._ProductscartService.changeCounterValue(++this.cartCount);
    // handel the quantity and price
    this._ProductscartService.setProductsCards({ ...product });
    // increase the total price
    this._ProductscartService.changeProductsPrice(
      parseFloat(product.price),
      'increase'
    );
  }

  // handel the decrease amount btn
  decreaseAmount(product: ProductDetails) {
    // handel the cart
    this._ProductscartService.changeCounterValue(--this.cartCount);
    // decrease the total price
    this._ProductscartService.changeProductsPrice( parseFloat(product.price),'decrease');

    // handel the quantity and price
    product.proPrice -= parseFloat(product.price);
    product.quantity--;

    if (product.quantity == 0) {

      this.prod.forEach((e, i) => {

        e.id = product.id;
        this.prod.splice(i, 1);
      });
    }
  }
}
