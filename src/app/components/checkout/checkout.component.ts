import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ShoppingCartService } from '../../services/shopping-cart.service';

import { Cart } from '../../models/cart.model';

@Component({
    styleUrls: ['./checkout.component.scss'],
    template: `

    <ng-container *ngIf="cart.products.length === 0">
          <h1>Cart is empty</h1>
    </ng-container>

    <ng-container *ngIf="cart.products.length > 0">
      <div *ngFor="let item of cart.products" class="cart-product">
        {{item.product.name}} : {{item.quantity}}
      </div>
      <button (click)="checkout()" type="button" id="place-order-button" >Place Order</button>
    </ng-container>

    <button (click)="goBackShopping()">Go back shopping</button>

    `
})
export class CheckoutComponent implements OnInit {

  cart: Cart;

  constructor(
    private router: Router,
    private shoppingCartService: ShoppingCartService) {
}

/**
 * @description
 * Gets the list of the products in the cart
 */
ngOnInit() {
  this.cart = this.shoppingCartService.getCart();
}

/**
 * @description
 * Returns to the store
 */
goBackShopping() {
  this.router.navigate(['/']);

}

/**
 * @description
 * Places the order and returns to the successfull page
 */
checkout() {
 try {
  this.shoppingCartService
  .placeOrder().subscribe(result => {
    this.shoppingCartService.clearCart();
    this.router.navigate(['/order-confirmed']);
  });
 }catch (err) {
   console.log(err);
 }
}

}
