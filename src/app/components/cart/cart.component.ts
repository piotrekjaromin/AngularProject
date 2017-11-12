import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from '../../data/product';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  @Input() cartProducts: Map<Product, number> = new Map<Product, number>();
  @Output() view = new EventEmitter<string>();
  @Output() productToRemove = new EventEmitter<Product>();

  changeView(view: string): void {
    this.view.emit(view);
  }

  removeProduct(product: Product) {
    this.productToRemove.emit(product);
  }
}

