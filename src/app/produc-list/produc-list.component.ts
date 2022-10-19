import { Component, OnInit } from '@angular/core';
import { ProductDetails } from '../interfaces/product-details';
import { ProductsService } from '../services/products.service';
import { LoaderService } from '../services/loader.service';
// import { Store } from '@ngrx/store';
import { addToFavourite } from '../favouriteList/favorite.action';

@Component({
  selector: 'app-produc-list',
  templateUrl: './produc-list.component.html',
})
export class ProducListComponent implements OnInit {
  products: Array<ProductDetails> = [];
  loadelValue: boolean = false;
  constructor(
    private _ProductsService: ProductsService,
    private _LoaderService: LoaderService,
    
  ) {}

  ngOnInit(): void {
    this._ProductsService.getProducts().subscribe((data) => {
      this.products = data;
      console.log(this.products);
    });
    this._LoaderService.laoderVal.subscribe((val) => (this.loadelValue = val));
    
  }

}
