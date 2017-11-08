import {Component, OnInit} from '@angular/core';
import {Product} from './product';
import {ProductService} from './product.service';

@Component({
  selector: 'app-root',
  template: `    
    <left-menu [categories]="categories" (selectedCategories)="changeSelectedCategory($event)"></left-menu>
    <list-of-products [products]="getProductWithCategory(selectedCategories)"></list-of-products>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  products: Product[] = [];
  selectedCategories: String[] = [];
  categories: String[];

  constructor(private productService: ProductService) {}

  getProducts(): void {
    this.products = this.productService.getProducts();
    this.categories = this.removeDuplicate(this.products.map(product => product.category));
  }

  ngOnInit(): void {
    this.getProducts();
  }

  changeSelectedCategory(categories: String[]): void {
    this.selectedCategories = categories;
  }

  getProductWithCategory(categories: string[]): Product[] {
    return this.products.filter(product => categories.indexOf(product.category) > -1);
  }

  removeDuplicate(categories: string[]): string[] {
    var result: string[] = [];
    for (let category of categories) {
      if(result.indexOf(category) === -1) {
        result.push(category);
      }
    }
    return result;
  }

}

