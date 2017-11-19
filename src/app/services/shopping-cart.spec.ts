import { ShoppingCartService } from './shopping-cart.service';
import { Product } from '../models/product.model';



describe('Service: ActionsService', function () {

    let service: ShoppingCartService;

    const mockProduct1 = new Product('001', 'Product 1', 7, null);
    const mockProduct2 = new Product('002', 'Product 2', 20, null);
    const mockProduct3 = new Product('003', 'Product 23', 35.20, null);

    beforeEach(() => {
      service = new ShoppingCartService(null);
    });

    it('should add one product to the cart', () => {
        service.addProduct(mockProduct1, 1);

        expect(service.getCart().totalPrice).toBe(7);
        expect(service.getCart().products.length).toBe(1);
    });

    it('should add one product to the cart but quantity > 1 ', () => {
      service.addProduct(mockProduct1, 5);

      expect(service.getCart().totalPrice).toBe(35);
      expect(service.getCart().products.length).toBe(1);
    });

    it('should add 2 products to the cart ', () => {
      service.addProduct(mockProduct1, 1);
      service.addProduct(mockProduct2, 1);

      expect(service.getCart().totalPrice).toBe(27);
      expect(service.getCart().products.length).toBe(2);
      expect(service.getCart().products[0].quantity).toBe(1);
      expect(service.getCart().products[1].quantity).toBe(1);
    });

    it('should add 3 products to the cart ', () => {
      service.addProduct(mockProduct1, 2);
      service.addProduct(mockProduct2, 3);
      service.addProduct(mockProduct3, 1);

      expect(service.getCart().totalPrice).toBe(109.20);
      expect(service.getCart().products.length).toBe(3);
      expect(service.getCart().products[0].quantity).toBe(2);
      expect(service.getCart().products[1].quantity).toBe(3);
      expect(service.getCart().products[2].quantity).toBe(1);
    });

    it('should remove 1 products from the cart ', () => {
      service.addProduct(mockProduct3, 1);

      expect(service.getCart().totalPrice).toBe(35.20);
      expect(service.getCart().products.length).toBe(1);
      service.addProduct(mockProduct3, -1);
      expect(service.getCart().totalPrice).toBe(0);
      expect(service.getCart().products.length).toBe(0);
    });

    it('should remove 2 products from the cart ', () => {
      service.addProduct(mockProduct1, 2);
      service.addProduct(mockProduct2, 1);

      expect(service.getCart().totalPrice).toBe(34);
      expect(service.getCart().products.length).toBe(2);

      service.addProduct(mockProduct1, -1);
      expect(service.getCart().totalPrice).toBe(27);

      service.addProduct(mockProduct1, -1);
      expect(service.getCart().totalPrice).toBe(20);
      expect(service.getCart().products.length).toBe(1);
    });


    it('should clear cart ', () => {
      service.addProduct(mockProduct2, 1);
      expect(service.getCart().totalPrice).toBe(20);

      service.clearCart();
      expect(service.getCart().totalPrice).toBe(0);
      expect(service.getCart().products.length).toBe(0);

    });

});

