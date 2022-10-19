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
  cartCount :number = 0;
  quantity: any = 0;

  constructor(private _ProductscartService: ProductscartService) {}

  ngOnInit(): void {
    this._ProductscartService.arrayValue.subscribe((val) => {
      this.prod = val;
    });
    this._ProductscartService.conterterValue.subscribe(
      (val) => (this.cartCount = val)
    );
    this.productsTotalPrice = this._ProductscartService.totalPrice;
  }
  // handel the increase amount btn
  increaseAmount(product: ProductDetails) {
  // handel the cart
    this._ProductscartService.changeCounterValue(++this.cartCount);
  // handel the quantity
    this.productsTotalPrice += parseFloat(product.price);
    product.quantity++;
  }

  // handel the decrease amount btn
  decreaseAmount(product: ProductDetails) {
  // handel the cart
    this._ProductscartService.changeCounterValue(--this.cartCount);
  // handel the quantity
    this.productsTotalPrice -= parseFloat(product.price);
    product.quantity--;
    if (product.quantity == 0) {
      this.prod.forEach((e, i) => {
        e.id = product.id;
        this.prod.splice(i, 1);
      });
    }
  }
}
