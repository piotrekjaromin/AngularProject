import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {Http, Response} from '@angular/http';

@Injectable()
export class ProductService {
  getProductHttp = 'http://localhost:5000';

  constructor(private http: Http) {
  }

  getProducts(categories: string[], page: number, priceFrom: number, priceTo: number, productName: string) {
    return this.http
      .get(this.getProductHttp +
        '/products?currentPage=' + page +
        '&categories=' + categories +
        '&priceFrom=' + priceFrom +
        '&priceTo=' + priceTo +
        '&productName=' + productName)
      .map((response: Response) => response.json());
  }

  getCategories() {
    return this.http.get(this.getProductHttp + '/categories').map((response: Response) => response.json());
  }

  getProductsNumber(categories: string[], priceFrom: number, priceTo: number, productName: string) {
    return this.http
      .get(this.getProductHttp + '/productsNumber?categories=' + categories +
        '&priceFrom=' + priceFrom +
        '&priceTo=' + priceTo +
        '&productName=' + productName)
      .map((response: Response) => response);
  }
}
