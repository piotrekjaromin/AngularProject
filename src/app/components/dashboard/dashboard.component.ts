import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Product} from "../../data/product";
import {ProductFromDB} from "../../data/productFromDB";

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: []
})
export class DashboardComponent implements OnInit{
  selectedCategories: string[] = [];
  numberOfPages: number;
  products: ProductFromDB[] = []
  currentPage = 1;

  filter(prices: number[]) {
    console.log(prices[0]);
    console.log(prices[1]);
  }

  changeSelectedCategory(categories: string[]): void {
    this.selectedCategories = categories;
    this.getNumberOfPages(categories);
    this.getProducts(this.selectedCategories, 1);
    this.currentPage = 1;
  }

  pagination(page: number) {
    this.currentPage = this.currentPage + page;

    if( this.currentPage > this.numberOfPages) this.currentPage = this.numberOfPages
    if(this.currentPage < 1) this.currentPage = 1;
    this.getProducts(this.selectedCategories, this.currentPage);
  }

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.getProducts(this.selectedCategories, 1);
    this.getNumberOfPages([]);
  }

  getNumberOfPages(categories: string[]) {
    this.productService.getProductsNumber(categories)
      .subscribe(numberOfPages => {
        this.numberOfPages = Math.ceil(numberOfPages['_body'] / 3);
        if (this.numberOfPages < 1) {
          this.numberOfPages = 1;
        }
      });
  }

  getProducts(categories: string[], currentPage: number) {
    if (categories.length === 0) {
      this.productService.getCategories().subscribe(data => {
        categories = data;
        this.productService.getProducts(categories, currentPage).subscribe(products => {
          this.products = products;
        });
      });
    } else {
      this.productService.getProducts(categories, currentPage).subscribe(products => {
        this.products = products;
      });
    }

  }
}

