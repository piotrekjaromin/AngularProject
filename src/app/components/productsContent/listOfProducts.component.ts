import {Component, EventEmitter, Input, NgZone, OnChanges, OnInit, Output, SimpleChange, SimpleChanges} from '@angular/core';
import {Product} from '../../data/product';
import {ProductService} from '../../services/product.service';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'list-of-products',
  templateUrl: './listOfProducts.component.html',
  styleUrls: ['./listOfProducts.component.css']
})
export class ListOfProductsComponent implements OnInit{
  products: Product[];
  @Input() currentPage = 1;
  @Input() numberOfPages: number;
  @Input() selectedCategories: string[];

  constructor(private productService: ProductService, private cartService: CartService) {
  }

  getProducts(categories: string[], currentPage: number) {
    if (categories.length === 0) {
      this.productService.getCategories().subscribe(data => categories = data.map(d => d.category));
    }
    this.productService.getProducts(categories, currentPage).subscribe(data => this.products = data);
  }

  previousPage(): void {
    if (this.currentPage > 1 ) {
      this.currentPage--;
    }
    this.getProducts(this.selectedCategories, this.currentPage);
  }

  ngOnInit(): void {
    this.getProducts([], 1);
    this.getNumberOfPages([]);
  }

  nextPage(): void {
    if (this.currentPage < this.numberOfPages) {
      this.currentPage++;
    }
    this.getProducts(this.selectedCategories, this.currentPage);
  }

  addToCart(product: Product): void {
    this.cartService.addProductToCart(product);
  }

  getNumberOfPages(categories: string[]) {
    this.productService.getProductsNumber(categories)
      .subscribe(numberOfPages => {
        this.numberOfPages = Math.ceil(numberOfPages.length / 3);
        if (this.numberOfPages < 1) {
          this.numberOfPages = 1;
        }
      });
  }
}
