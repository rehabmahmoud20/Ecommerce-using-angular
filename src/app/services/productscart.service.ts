import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductDetails } from '../interfaces/product-details';

@Injectable({
  providedIn: 'root',
})
export class ProductscartService {
  totalPrice: number = 0;
  constructor() {}
  intialArray: ProductDetails[] = [];
  private counter = new BehaviorSubject(0);
  private productsArray = new BehaviorSubject(this.intialArray);
  private heart = new BehaviorSubject(false);
  private faVProductcount = new BehaviorSubject(0);

  conterterValue = this.counter.asObservable();
  arrayValue = this.productsArray.asObservable();
  heartValue = this.heart.asObservable();
  favoCountVal = this.faVProductcount.asObservable();

  changeHeartVal(value: boolean) {
    this.heart.next(value);
  }
  
  changeCounterValue(value: number) {
    this.counter.next(value);
  }

   changeFavoriteCount(val:number){
    this.faVProductcount.next(val)
   }


  changeProductsPrice(product: ProductDetails) {
    this.totalPrice += parseFloat(product.price);
    return this.totalPrice;
  }

  setProductsCards(product: ProductDetails) {
    let index: number = 0;
    //check if the item is found in the array or not
    let state: boolean = this.intialArray.some(
      (item: ProductDetails, i: number): boolean => {
        if (item.id === product.id) index = i;
        return item.id === product.id;
      }
    );
    // customize the quantity of each item
    if (state) {
      this.intialArray[index].quantity++;
    } else {
      this.intialArray.push(product);
      index = this.intialArray.length - 1;
      this.intialArray[index].quantity = 1;
    }
  }
  decreasetheQuantity(product: ProductDetails) {
    product.quantity--;
  }
}
