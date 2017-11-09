import {Component, OnInit} from '@angular/core';
import {Product} from './product';
import {ProductService} from './product.service';

@Component({
  selector: 'app-root',
  template: `
    <left-menu
      [categories]="categories"
      (selectedCategories)="changeSelectedCategory($event)">
    </left-menu>
    <list-of-products
      [products]="getProductWithCategory(selectedCategories)"
      [currentPage]="currentPage"
      (currentPageEmitter)="changePage($event)">
    </list-of-products>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  products: Product[] = [];
  selectedCategories: string[] = [];
  categories: string[];
  currentPage = 1;

  constructor(private productService: ProductService) {}

  getProducts(categories: string[], currentPage: number): void {
    this.products = this.productService.getProducts(categories, currentPage);
  }

  getCategories(): void {
    this.categories = this.productService.getCategories();
  }

  ngOnInit(): void {
    this.getCategories();
    this.getProducts(this.categories, this.currentPage);

  }

  changeSelectedCategory(categories: string[]): void {
    this.selectedCategories = categories;
  }

  getProductWithCategory(categories: string[]): Product[] {
    return this.products.filter(product => categories.indexOf(product.category) > -1);
  }

  changePage(page: number) {
    this.currentPage = this.currentPage + page;
  }

}

