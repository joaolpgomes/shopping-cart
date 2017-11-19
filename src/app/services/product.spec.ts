import { inject, TestBed } from '@angular/core/testing';
import { HttpModule, Response, ResponseOptions, XHRBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { Product } from '../models/product.model';
import { ProductsService } from './product.service';
import 'rxjs/add/operator/map';

describe('ProductsService', () => {

  const mockProduct1 = new Product('001', 'Product 1', 7, null);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      providers: [
        ProductsService,
       { provide: XHRBackend, useClass: MockBackend }
     ]
    });
  });

  it('should call get products', inject([ProductsService, XHRBackend], (service: ProductsService, mockBackend: MockBackend) => {

    mockBackend.connections.subscribe((connection) => {
      expect(connection.request.url).toEqual('get/products');
      connection.mockRespond(new Response(new ResponseOptions({
        body: JSON.stringify([mockProduct1])
      })));
    });

    service.getAll().subscribe((products) => {
            expect(products.length).toBe(1);
    });
  }));

});


