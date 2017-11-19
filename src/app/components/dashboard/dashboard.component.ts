import {Component} from '@angular/core';
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: []
})
export class DashboardComponent {
  selectedCategories: string[] = [];
  numberOfPages: number;

  changeSelectedCategory(categories: string[]): void {
    this.selectedCategories = categories;
    this.getNumberOfPages(categories);
  }

  constructor(private productService: ProductService) {
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

