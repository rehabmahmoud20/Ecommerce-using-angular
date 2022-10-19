import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{ProductsService} from '../services/products.service'
import{ProductDetails}from'../interfaces/product-details'
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
id :string='';
movieDetails:ProductDetails= {
  name: '',
  image: '',
  count: 0,
  price: '',
  createdAt: '',
  description: '',
  rate: 0,
  id: '',
  reviews: [],
  quantity:0,
  case:false
}
  constructor(private _ProductsService:ProductsService,private _ActivatedRoute:ActivatedRoute) { 
this.id=_ActivatedRoute.snapshot.params['id']
  }

  ngOnInit(): void {
    this._ProductsService.getProductDetails(this.id).subscribe(response=>{
      this.movieDetails = response;
    })
  }

}
