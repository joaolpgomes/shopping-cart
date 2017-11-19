import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
    selector: 'app-home',
    styleUrls: ['./home.component.scss'],
    template: `
    <div class="products-list">
      <product
        *ngFor="let product of products"
        [detail]="product">
      </product>
    </div>
    `
})
export class HomeComponent implements OnInit {
    constructor(private productsService: ProductsService) {}

    products: Product[] = [];

    ngOnInit() {
        this.productsService
            .getAll()
            .subscribe((data: Product[]) => {
                this.products = data;
        });
    }

}
