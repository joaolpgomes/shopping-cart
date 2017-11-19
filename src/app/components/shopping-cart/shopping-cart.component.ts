import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'shopping-cart',
    encapsulation: ViewEncapsulation.None,
    template: `
    Total in the cart: {{cartTotal | currency: 'GBP': 'symbol'}}
    <button (click)="goToCart()" type="button" *ngIf="router.url === '/'">Go To Cart</button>
    `
})
export class ShoppingCartComponent {

  subscription: Subscription;
  cartTotal: number = 0;
  numberProducts: number = 0;

  constructor(
      public router: Router,
      private shoppingCartService: ShoppingCartService) {

        this.subscription = this.shoppingCartService.update$.subscribe({
          next: (result: any) => {
              this.cartTotal = result.totalPrice;
          }
        });
  }

  /**
   * @description
   * Should redirect to checkout
   */
  goToCart() {
    this.router.navigate(['/checkout']);
  }
}
