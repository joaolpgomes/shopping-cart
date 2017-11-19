import { CartProduct } from './cart-product.model';

export class Cart {

  private _products: CartProduct[] = new Array<CartProduct>();
  private _totalPrice: number = 0;

  /*
  * @description
  * Setter for products
  */
  set products(products: CartProduct[]){
    this._products = products;
  }

  /*
  * @description
  * Setter for total price
  */
  set totalPrice(price: number){
    this._totalPrice = price;
  }


  /**
   * @description
   * Returns list of products in the cart
   */
  get products() {
    return this._products;
  }

  /**
  * @description
  * Returns total price
  */
  get totalPrice() {
    return parseFloat(this._totalPrice.toFixed(2));
  }

}
