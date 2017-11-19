import { InMemoryDbService } from 'angular-in-memory-web-api';

export class ProductsData implements InMemoryDbService {
  createDb() {
    const products = [
      {
        'code': '001',
        'price': 9.25,
        'name': 'Travel Card Holder',
        'image': 'assets/images/3.jpg'
      },
      {
        'code': '002',
        'price': 45.00,
        'name': 'Personalised cufflinks',
        'image': 'assets/images/2.jpg'
      },
      {
        'code': '003',
        'price': 19.95,
        'name': 'Kids T-shirt',
        'image': 'assets/images/1.jpg'
      }
    ];

    const order = [];

    return {products, order};
  }
}
