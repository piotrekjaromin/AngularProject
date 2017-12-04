import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Order} from '../data/order';
import {Http, RequestOptions} from '@angular/http';
import {Product} from '../data/product';
import {CartProduct} from '../data/cartProduct';
import {isUndefined} from "util";

@Injectable()
export class CartService {

  constructor(private http: Http) {
  }

  saveOrderHttp = 'http://localhost:5000/orders';

  private cartPriceSource: BehaviorSubject<number> = new BehaviorSubject(0);
  cartPrice = this.cartPriceSource.asObservable();

  private cartProductSource: BehaviorSubject<CartProduct[]> = new BehaviorSubject([]);
  cartProduct = this.cartProductSource.asObservable();

  private numberOfProductSource: BehaviorSubject<number> = new BehaviorSubject(0);
  numberOfProduct = this.numberOfProductSource.asObservable();

  saveOrder(order: Order) {
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions(headers);

    return this.http
      .post(this.saveOrderHttp, order, options);
  }

  addProductToCart(product: Product) {
    let shopCart: CartProduct[] = JSON.parse(sessionStorage.getItem('shopCart'));
    let founded = false;
    const productPrice = (product.promotionPrice !== 0 && !isUndefined(product.promotionPrice)) ? product.promotionPrice : product.price;
    shopCart = (shopCart === null) ? [] : shopCart;

    for (const i in shopCart) {
      if (shopCart[i].product._id === product._id) {
        shopCart[i].number++;
        founded = true;
      }
    }
    if (!founded) { shopCart.push(new CartProduct(product, 1)); }
    this.setData(shopCart, productPrice);
  }

  removeProductFromCard(product: Product): void {
    const shopCart: CartProduct[] = JSON.parse(sessionStorage.getItem('shopCart'));
    for (const i in shopCart) {
      if (shopCart[i].product._id === product._id) {
        const shopCartNumber = shopCart[i].number;
        shopCart.splice(parseInt(i, 10), 1);
        this.setData(shopCart, -product.price * shopCartNumber);
        break;
      }
    }
  }

  removeOneProductFromCard(product: Product): void {
    const shopCart: CartProduct[] = JSON.parse(sessionStorage.getItem('shopCart'));
    for (const i in shopCart) {
      if (shopCart[i].product._id === product._id) {
        shopCart[i] = new CartProduct(product, shopCart[i].number - 1);
        this.setData(shopCart, -product.price);
        break;
      }
    }
  }

  private setData(shopCart: CartProduct[], productPrice: number) {
    let cartPrice = sessionStorage.getItem('cartPrice');
    let cartProductNumber = 0;
    cartPrice = (cartPrice === null) ? '0' : cartPrice;
    shopCart.forEach(p => cartProductNumber += p.number );

    sessionStorage.setItem('cartPrice', (parseFloat(cartPrice) + productPrice).toFixed(2));
    sessionStorage.setItem('cartNumber', cartProductNumber.toFixed(2));
    sessionStorage.setItem('shopCart', JSON.stringify(shopCart));

    this.cartPriceSource.next((parseFloat(cartPrice) + productPrice));
    this.numberOfProductSource.next(cartProductNumber);
    this.cartProductSource.next(shopCart);
  }

  public reloadData() {
    let cartPrice = sessionStorage.getItem('cartPrice');
    let cartProductNumber = sessionStorage.getItem('cartNumber');
    let shopCart = sessionStorage.getItem('shopCart');
    cartPrice = (cartPrice === null) ? '0' : cartPrice;
    cartProductNumber = (cartProductNumber === null) ? '0' : cartProductNumber;
    shopCart = (shopCart === null) ? '[]' : shopCart;

    this.cartPriceSource.next((parseFloat(cartPrice)));
    this.numberOfProductSource.next(parseFloat(cartProductNumber));
    this.cartProductSource.next(JSON.parse(shopCart));
  }
}
