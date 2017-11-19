import { Injectable } from '@angular/core';
import { PRODUCTS } from '../data/productsList';
import 'rxjs/add/operator/map';
import {Http, Response} from '@angular/http';

@Injectable()
export class ProductService {
  getProductHttp = 'http://localhost:5500/products';
  constructor(private http: Http) { }

  getProducts(categories: string[], page: number) {
    return this.http
      .get(this.createQueryGetProductByCategory(categories, page))
      .map((response: Response) => response.json());
  }

  getCategories() {
    return this.
    http.get(this.getProductHttp).map((response: Response) => response.json());
  }

  getProductsNumber(categories: string[]) {
    return this.http
      .get(this.createQueryGetProductByCategoryNoPage(categories))
      .map((response: Response) => response.json());
  }

  public createQueryGetProductByCategory(categories: string[], page: number) {
    var result = this.getProductHttp;
    if (categories.length > 0) {
      result += '?{"category":{"$in":["' + categories.join('","') + '"]},"$skip":' + (3 * page - 3) + ',"$limit":3}';
    } else {
      result += '?{"$skip":' + (3 * page - 3) + ',"$limit":3}';
    }
    return result;
  }

  public createQueryGetProductByCategoryNoPage(categories: string[]) {
    var result = this.getProductHttp;
    if (categories.length > 0) {
      result += '?{"category":{"$in":["' + categories.join('","') + '"]}}';
    }
    return result;
  }
}
