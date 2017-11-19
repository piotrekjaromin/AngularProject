import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../data/product';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
   cartProducts: Product[];

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.cartService.cartProduct.subscribe(products => this.cartProducts = products);
  }

  removeProduct(product: Product) {
    this.cartService.removeProductFromCard(product);
  }

}

