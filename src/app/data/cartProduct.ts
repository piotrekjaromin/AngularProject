import {Product} from './product';
import {ProductFromDB} from './productFromDB';

export class CartProduct {
  constructor(public product: ProductFromDB, public number: number) {}
}
