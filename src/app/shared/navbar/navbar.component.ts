import { ProductDetails } from './../../interfaces/product-details';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import { ProductscartService } from '../../services/productscart.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  cart: any = faCartShopping;
  productsCount: number = 0;
  favProduCount:number = 0;
  heart:any = faHeart;
  arr:ProductDetails[]=[];
  arrLength:number = this.arr.length;
  constructor(private _ProductscartService: ProductscartService, private _Store: Store<{
    addFavourite: {
      items: any;
    };
  
    
  }>) {
   
  }
  ngOnInit(): void {
    this._ProductscartService.conterterValue.subscribe(
      (val) => (this.productsCount = val)
    );
    this._ProductscartService.favoCountVal.subscribe(
      (val) => (this.favProduCount = val)
    );
    this._Store
      .select('addFavourite')
      .subscribe((res) => (this.arr = res.items.slice()));
      console.log(this.arrLength)
  }



}
