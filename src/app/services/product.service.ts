import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { Product } from '../models/product.model';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductsService {

  constructor(private http: Http) {}

  private products: Observable<Product[]>;

  /**
   * @description
   * Returns the list of products
   */
  getAll(): Observable<Product[]> {

    return this.products = this.http.get('get/products')
      .map((response) => response.json()
      .map((item: Product) => {
        const product = new Product(item.code, item.name, item.price, item.image);
        return product;
      }));
  }
}
