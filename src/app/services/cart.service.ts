import { Injectable } from '@angular/core';
import { Product } from '../data/product';
import {cartProducts} from '../data/cartProductsList';

@Injectable()
export class CartService {

  getCartProduct(): Map<Product, number> {
    return cartProducts;
  }


  addProductToCard(product: Product): void {
    if (cartProducts.has(product)) {
      cartProducts.set(product, cartProducts.get(product) + 1);
    } else {
      cartProducts.set(product, 1);
    }
  }

  removeProductFromCard(product: Product): void {
    if (cartProducts.get(product) > 1) {
      cartProducts.set(product, cartProducts.get(product) - 1);
    } else {
      cartProducts.delete(product);
    }
  }
}
