import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Http, Response} from '@angular/http';

@Injectable()
export class ProductService {
  getProductHttp = 'http://localhost:5000';
  constructor(private http: Http) { }

  getProducts(categories: string[], page: number) {
    return this.http
      .get(this.getProductHttp + '/products?currentPage=' + page + '&categories=' + categories)
      .map((response: Response) => response.json());
  }

  getProduct(id: string) {
    return this.http
      .get(this.getProductHttp + '/getProduct?id=' + id)
      .map((response: Response) => response.json());
  }

  getCategories() {
    return this.
    http.get(this.getProductHttp + '/categories').map((response: Response) => response.json());
  }

  getProductsNumber(categories: string[]) {
    return this.http
      .get(this.getProductHttp + '/productsNumber?categories=' + categories)
      .map((response: Response) => response);
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
