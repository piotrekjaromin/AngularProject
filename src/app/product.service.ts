import { Injectable } from '@angular/core';
import { Product } from './product';
import { PRODUCTS } from './productsList';

@Injectable()
export class ProductService {

  getProducts(categories: String[], page: number): Product[] {
    return PRODUCTS.filter(product => categories.indexOf(product.category) > -1).slice(page - 1, page + 2);
  }

  getCategories(): string[] {
    return this.removeDuplicate(PRODUCTS.map(product => product.category));
  }

  private removeDuplicate(categories: string[]): string[] {
    const result: string[] = [];
    for (const category of categories) {
      if (result.indexOf(category) === -1) {
        result.push(category);
      }
    }
    return result;
  }
}
