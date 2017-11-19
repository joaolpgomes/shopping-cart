import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Http, Response, RequestOptions } from '@angular/http';
import { Observer } from 'rxjs/Observer';
import { CartProduct  } from '../models/cart-product.model';
import { Product } from '../models/product.model';
import { Cart } from '../models/cart.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ShoppingCartService {

  private cart: Cart;

  private updateSubject: Subject<any> = new Subject();
  update$: Observable<Cart> = this.updateSubject.asObservable();


  constructor(private http: Http) {
      this.cart = new Cart();
  }

  /**
   * @description
   * Returns the products and the quantities in the cart
   */
  getCart() {
      return this.cart;
  }

  /**
  * @description
  * Returns the total price of the cart
  */
  placeOrder(): any {
    return this.http.post('api/order', { id: 1 });
  }

  /**
   * @description
   * Adds new item to the cart. If item already in the cart, just updates the quantity
   * Adds the price of the product to the total
   */
  addProduct(product: Product, quantity: number) {
    let item = this.cart.products.find((p) => p.product.code === product.code);
    console.log(product);
    if (item === undefined) {
      item = new CartProduct();
      item.product = product;
      this.cart.products.push(item);
    }

    item.quantity += quantity;
    this.cart.products = this.cart.products.filter((cartItem) => cartItem.quantity > 0);
    this.cart.totalPrice += (product.price * quantity);

    this.updateSubject.next(this.cart);
  }

  /**
   * @description
   * Clear the cart
   */
  clearCart() {
    this.cart = new Cart;
    this.updateSubject.next(this.cart);
  }

}
