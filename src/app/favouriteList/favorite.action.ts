import { ProductDetails } from './../interfaces/product-details';
import { createAction, props } from '@ngrx/store';

export const addToFavourite = createAction(
    '[productlist Page] add To Favourite ',
    props<{ product: any}>()
  );
export  const deleteProduct = createAction(
    '[favorite Page] delete Favourite ',
    props<{ product: any}>()
  );

