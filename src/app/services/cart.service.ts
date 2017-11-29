import {Injectable} from '@angular/core';
import {Product} from '../data/product';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Order} from '../data/order';
import {Http, RequestOptions} from '@angular/http';
import {ProductFromDB} from '../data/productFromDB';
import {CartProduct} from '../data/cartProduct';

@Injectable()
export class CartService {

  constructor(private http: Http) {
  }

  saveOrderHttp = 'http://localhost:5500/orders';

  private cartPriceSource: BehaviorSubject<number> = new BehaviorSubject(0);
  cartPrice = this.cartPriceSource.asObservable();

  private cartProductSource: BehaviorSubject<CartProduct[]> = new BehaviorSubject([]);
  cartProduct = this.cartProductSource.asObservable();

  private numberOfProductSource: BehaviorSubject<number> = new BehaviorSubject(0);
  numberOfProduct = this.numberOfProductSource.asObservable();

  saveOrder(fullName: string, address: string, products: Product[]) {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions(headers);
    var order = new Order(fullName, address, products);
    console.log('order: ' + JSON.stringify(order));
    this.http.post(this.saveOrderHttp, order, options).subscribe();
    this.cartPriceSource.next(0);
    this.cartProductSource.next([]);
    this.numberOfProductSource.next(0);
    return;
  }

  addProductToCart(product: ProductFromDB) {

    var shopCart: CartProduct[] = JSON.parse(localStorage.getItem('shopCart'));
    var cartPrice: string = localStorage.getItem('cartPrice')
    var cartNumber: string = localStorage.getItem('cartNumber')
    var founded = false;

    shopCart = (shopCart === null) ? [] : shopCart;
    cartPrice = (cartPrice === null) ? '0' : cartPrice;
    cartNumber = (cartNumber === null) ? '0' : cartNumber;

    for (const i in shopCart) {
      if (shopCart[i].product._id === product._id) {
        shopCart[i].number++;
        founded = true;
      }
    }

    if (!founded) {
      shopCart.push(new CartProduct(product, 1));
    }

    localStorage.setItem('shopCart', JSON.stringify(shopCart));
    this.cartProductSource.next(shopCart);

    cartPrice = (parseInt(cartPrice, 10) + product.price).toString();
    localStorage.setItem('cartPrice', cartPrice.toString());
    this.cartPriceSource.next(parseInt(cartPrice, 10));

    cartNumber = (parseInt(cartNumber, 10) + 1).toString();
    this.numberOfProductSource.next(parseInt(cartNumber, 10));
    localStorage.setItem('cartNumber', cartNumber);
  }

  removeProductFromCard(product: ProductFromDB): void {
    const shopCart: CartProduct[] = JSON.parse(localStorage.getItem('shopCart'));
    const cartPrice: number = parseInt(localStorage.getItem('cartPrice'), 10);
    const cartNumber: number = parseInt(localStorage.getItem('cartNumber'), 10);

    for (const i in shopCart) {
      if (shopCart[i].product._id === product._id) {

        localStorage.setItem('cartNumber', (cartNumber - shopCart[i].number).toString());
        this.numberOfProductSource.next(cartNumber - shopCart[i].number);

        localStorage.setItem('cartPrice', (cartPrice - (shopCart[i].number * shopCart[i].product.price)).toString());
        this.cartPriceSource.next(cartPrice - (shopCart[i].number * shopCart[i].product.price));

        shopCart.splice(parseInt(i, 10), 1);
        break;
      }
    }

    localStorage.setItem('shopCart', JSON.stringify(shopCart));
    this.cartProductSource.next(shopCart);
  }

  removeOneProductFromCard(product: ProductFromDB): void {
    const shopCart: CartProduct[] = JSON.parse(localStorage.getItem('shopCart'));
    const cartPrice: number = parseInt(localStorage.getItem('cartPrice'), 10);
    const cartNumber: number = parseInt(localStorage.getItem('cartNumber'), 10);

    for (const i in shopCart) {
      if (shopCart[i].product._id === product._id) {

        localStorage.setItem('cartNumber', (cartNumber - 1).toString());
        this.numberOfProductSource.next(cartNumber - 1);

        localStorage.setItem('cartPrice', (cartPrice - shopCart[i].product.price).toString());
        this.cartPriceSource.next(cartPrice - shopCart[i].product.price);

        shopCart[i] = new CartProduct(product, shopCart[i].number - 1);
        break;
      }
    }

    localStorage.setItem('shopCart', JSON.stringify(shopCart));
    this.cartProductSource.next(shopCart);
  }
}
