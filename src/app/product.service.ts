import { Injectable } from '@angular/core';
import { Product } from './product';
import { PRODUCTS } from './productsList';

@Injectable()
export class ProductService {
  getProducts(): Product[] {
    return PRODUCTS;
  }
}
