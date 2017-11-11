import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from '../../data/product';

@Component({
  selector: 'list-of-products',
  templateUrl: './listOfProducts.component.html',
  styleUrls: ['./listOfProducts.component.css']
})
export class ListOfProductsComponent {
  @Input() products: Product[];
  currentPage = 1;
  @Input() numberOfPages: number;
  @Output() currentPageEmitter = new EventEmitter<number>();
  @Output() addedProduct = new EventEmitter<Product>();

  previousPage(): void {
    if (this.currentPage > 1 ) {
      this.currentPage--;
      this.currentPageEmitter.emit(-1);
    }
  }

  nextPage(): void {
    if (this.currentPage < this.numberOfPages) {
      this.currentPage++;
      this.currentPageEmitter.emit(1);
    }
  }

  addToCart(product: Product): void {
    this.addedProduct.emit(product);
  }
}
