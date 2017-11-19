import {Product} from './product';

export class Order {
  constructor(public fullName: string, public address: string, public products: Product[]) {}
}
