import { Injectable } from '@angular/core';
import { Product } from '../data/product';
import { PRODUCTS } from '../data/productsList';

@Injectable()
export class ProductService {

  getProducts(categories: String[], page: number): Product[] {
    return PRODUCTS.filter(product => categories.indexOf(product.category) > -1).slice(3 * page - 3, 3 * page);
  }

  getCategories(): string[] {
    return this.removeDuplicate(PRODUCTS.map(product => product.category));
  }

  getProductsNumber(categories: String[]): number {
    return PRODUCTS.filter(product => categories.indexOf(product.category) > -1).length;
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
