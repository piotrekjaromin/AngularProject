import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: []
})
export class DashboardComponent implements OnInit {
  selectedCategories: string[] = [];


  constructor(private productService: ProductService, private cartService: CartService) {
  }

  ngOnInit(): void {

  }

  changeSelectedCategory(categories: string[]): void {
    this.selectedCategories = categories;
    console.log(categories);
    this.productService.createQueryGetProductByCategory(categories, 3);
  }
}

