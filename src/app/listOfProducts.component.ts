import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from './product';

@Component({
  selector: 'list-of-products',
  templateUrl: 'listOfProducts.component.html',
  styleUrls: ['./listOfProducts.component.html']
})
export class ListOfProductsComponent {
  @Input() products: Product[];
  currentPage = 1;
  @Output() currentPageEmitter = new EventEmitter<number>();

  previousPage(): void {
    if(this.currentPage > 1 ) {
      this.currentPage--;
    }
    this.currentPageEmitter.emit(-1);
  }

  nextPage(): void {
    if(this.currentPage < 10) {
      this.currentPage++;
    }
    this.currentPageEmitter.emit(1);
  }
}
