import { Action } from 'rxjs/internal/scheduler/Action';
// import { state } from '@angular/animations';
// import { state } from "@angular/animations";
import { createReducer, on } from '@ngrx/store';
// import { Action } from "rxjs/internal/scheduler/Action";
import { ProductDetails } from '../interfaces/product-details';
import { addToFavourite, deleteProduct } from './favorite.action';

interface itemsType {
  items: [];
}
const initialState: itemsType = {
  items: [],
};

export const favouriteProdReducer = createReducer(
  initialState,
  on(addToFavourite, (state, action): any => {
    console.log(action)
    return {
      ...state,
      items: action.product,
    };
  }),
  on(deleteProduct, (state, action): any => {
    console.log(action)
    return {
      ...state,
      items: action.product,
    };
  })
);
