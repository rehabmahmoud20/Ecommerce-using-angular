import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductDetails } from '../interfaces/product-details';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private _HttpClient: HttpClient) {}

  getProducts(){
    return this._HttpClient.get<ProductDetails[]>(`https://60523dc8fb49dc00175b7d04.mockapi.io/
api/v1/products`);
  }
  getProductDetails(id:any): Observable<any> {
    return this._HttpClient.get(`https://60523dc8fb49dc00175b7d04.mockapi.io/api/v1/products/${id}`);
  }
}
