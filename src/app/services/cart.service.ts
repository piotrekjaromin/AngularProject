import { Injectable } from '@angular/core';
import { Product } from '../data/product';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Order} from '../data/order';
import {Http, RequestOptions} from '@angular/http';

@Injectable()
export class CartService {

  constructor(private http: Http) { }

  saveOrderHttp = 'http://localhost:5500/orders';

  private cartPriceSource: BehaviorSubject<number> = new BehaviorSubject(0);
  cartPrice = this.cartPriceSource.asObservable();

  private cartProductSource: BehaviorSubject<Product[]> = new BehaviorSubject([]);
  cartProduct = this.cartProductSource.asObservable();
  //
  private numberOfProductSource: BehaviorSubject<number> = new BehaviorSubject(0);
  numberOfProduct = this.numberOfProductSource.asObservable();

  saveOrder(fullName: string, address: string, products: Product[]) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions(headers);
    var order = new Order(fullName, address, products);
    console.log('order: ' + JSON.stringify(order));
    this.http.post(this.saveOrderHttp, order, options).subscribe();
    this.cartPriceSource.next(0);
    this.cartProductSource.next([]);
    this.numberOfProductSource.next(0);
    return;
  }

  addProductToCart(product: Product) {
    var currentProducts = [];
    this.cartProduct.subscribe(products => currentProducts = products);
    currentProducts.push(product);
    this.cartProductSource.next(currentProducts);
    this.numberOfProductSource.next(currentProducts.length);

    var currentPrice = 0;
    this.cartPrice.subscribe(price => currentPrice = price);
    this.cartPriceSource.next(currentPrice + product.price);
  }

  removeProductFromCard(product: Product): void {

    var currentProducts = [];
    this.cartProduct.subscribe(products => currentProducts = products);
    var index = currentProducts.indexOf(product);
    if(index > -1 ) {
      currentProducts.splice(index, 1);
    }
    this.cartProductSource.next(currentProducts);
    this.numberOfProductSource.next(currentProducts.length);
    var currentPrice = 0;
    this.cartPrice.subscribe(price => currentPrice = price);
    this.cartPriceSource.next(currentPrice - product.price);
  }
}
