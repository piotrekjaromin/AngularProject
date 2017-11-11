import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from '../../data/product';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  @Input() cartProducts: Map<Product, number> = new Map<Product, number>();
  @Output() showCart = new EventEmitter<boolean>();
  @Output() productToRemove = new EventEmitter<Product>();

  showCartProducts(): void {
    this.showCart.emit(true);
  }

  removeProduct(product: Product) {
    this.productToRemove.emit(product);
  }
}

