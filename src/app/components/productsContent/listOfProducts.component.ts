import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CartService} from '../../services/cart.service';
import {ProductFromDB} from '../../data/productFromDB';

@Component({
  selector: 'list-of-products',
  templateUrl: './listOfProducts.component.html',
  styleUrls: ['./listOfProducts.component.css']
})
export class ListOfProductsComponent {
  @Input() products: ProductFromDB[];
  @Input() currentPage = 1;
  @Input() numberOfPages: number;
  @Output() currentPageEmiter = new EventEmitter<number>();

  constructor(private cartService: CartService) {
  }

  changePage(page: number): void {
    this.currentPageEmiter.emit(page);
  }

  addToCart(product: ProductFromDB): void {
    this.cartService.addProductToCart(product);
  }

}


