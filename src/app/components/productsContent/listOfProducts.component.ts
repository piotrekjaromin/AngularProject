import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CartService} from '../../services/cart.service';
import {Product} from '../../data/product';

@Component({
  selector: 'list-of-products',
  templateUrl: './listOfProducts.component.html',
  styleUrls: ['./listOfProducts.component.css']
})
export class ListOfProductsComponent {
  @Input() products: Product;
  @Input() currentPage = 1;
  @Input() numberOfPages: number;
  @Output() currentPageEmiter = new EventEmitter<number>();

  constructor(private cartService: CartService) {
  }

  changePage(page: number): void {
    this.currentPageEmiter.emit(page);
  }

  addToCart(product: Product): void {
    this.cartService.addProductToCart(product);
  }

}


