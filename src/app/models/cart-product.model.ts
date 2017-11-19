import { Product } from '../models/product.model';

export class CartProduct {

  private _product: Product;
  private _quantity: number = 0;

 /*
  * @description
  * Set for product
  */
  set product(product: Product){
      this._product = product;
  }

 /*
  * @description
  * Set for quantity
  */
  set quantity(quantity: number){
    this._quantity = quantity;
  }

  /*
  * @description
  * Returns product
  */
  get product(){
    return this._product;
  }

  /*
  * @description
  * Returns quantity
  */
  get quantity(){
    return this._quantity;
  }
}
