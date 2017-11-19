import { Component, Input } from '@angular/core';
import { ProductsService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
    selector: 'product',
    styleUrls: ['./product.component.scss'],
    template: `
      <div class="product">

        <div class="product__image">
           <img [src]="detail.image">
        </div>
        <div class="product__name">
          {{detail.name}}
        </div>
        <div class="product__code">
          {{detail.code}}
        </div>
        <div class="product__price">
          {{detail.price | currency: 'GBP': 'symbol'}}
        </div>

        <input
              name="numItems"
              type="number"
              [(ngModel)]="numItems"/>
        <button (click)="addToCart()" type="button" class="btn">Add to Cart</button>
      </div>
    `
})
export class ProductComponent {

  constructor(private shoppingCartService: ShoppingCartService) {}

  @Input()
  detail: Product;

  numItems: number = 1;

  /**
   * @description
   * Should add product to the cart
   */
  addToCart(): void {
    this.shoppingCartService.addProduct(this.detail, this.numItems);
  }

}
