
import { Directive, Input, NO_ERRORS_SCHEMA, SimpleChange } from '@angular/core';
import { ComponentFixture, TestBed, fakeAsync, tick} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ProductComponent } from './product.component';
import { Product } from '../../models/product.model';
import { ShoppingCartService } from '../../services/shopping-cart.service';

describe('ProductComponent', () => {

    const mockProduct1 = new Product('001', 'Product 1', 7, null);

    let comp: ProductComponent;
    let fixture: ComponentFixture<ProductComponent>;
    let debugElement: DebugElement;
    let service;


    beforeEach(() => {

      const ShoppingCartServiceStub = {
        addProduct: () => {}
      };

        TestBed.configureTestingModule({
            schemas:      [NO_ERRORS_SCHEMA],
            declarations: [ProductComponent],
            providers: [
              { provide: ShoppingCartService, useValue: ShoppingCartServiceStub }
            ]
        });

        fixture = TestBed.createComponent(ProductComponent);
        service = fixture.debugElement.injector.get(ShoppingCartService);

        comp = fixture.componentInstance;
        debugElement = fixture.debugElement;
    });


    it('should call add product from service', () => {
        spyOn(service, 'addProduct');

        comp.detail = mockProduct1;

        fixture.detectChanges();

        comp.addToCart();

        expect(service.addProduct).toHaveBeenCalledWith(mockProduct1, 1);

    });
});

