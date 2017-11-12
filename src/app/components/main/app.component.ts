import {Component, OnInit} from '@angular/core';
import {Product} from '../../data/product';
import {ProductService} from '../../services/product.service';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  products: Product[] = [];
  selectedCategories: string[] = [];
  categories: string[];
  currentPage = 1;
  numberOfPages = 1;
  cartNumberOfProducts = 0;
  cartPrice = 0;
  view = 'main';

  constructor(private productService: ProductService, private cartService: CartService) {
  }

  getProducts(categories: string[], currentPage: number): Product[] {
    if (categories.length === 0) {
      categories = this.categories;
      this.getNumberOfPages(categories);
    }
    this.products = this.productService.getProducts(categories, currentPage);
    return this.products;
  }

  getCategories(): void {
    this.categories = this.productService.getCategories();
  }

  getNumberOfPages(categories: String[]): void {
    let result = 0;
    result = Math.ceil(this.productService.getProductsNumber(categories) / 3);

    if (result < 1) {
      result = 1;
    }

    this.numberOfPages = result;
  }

  getCartProducts(): Map<Product, number> {
    return this.cartService.getCartProduct();
  }

  ngOnInit(): void {
    this.getCategories();
    this.getNumberOfPages(this.categories);
    this.getProducts(this.categories, this.currentPage);
  }

  changeSelectedCategory(categories: string[]): void {
    this.selectedCategories = categories;
    this.getProducts(this.selectedCategories, this.currentPage);
    this.getNumberOfPages(categories);
  }

  changePage(page: number) {
    this.currentPage = this.currentPage + page;
    this.getProducts(this.selectedCategories, this.currentPage);
  }

  addToCard(product: Product): void {
    this.cartService.addProductToCard(product);
    this.cartNumberOfProducts++;
    this.cartPrice += product.price;
  }

  removeProductFromCard(product: Product): void {
    this.cartService.removeProductFromCard(product);
    this.cartNumberOfProducts--;
    this.cartPrice -= product.price;
  }

  changeView(view: string) {
    this.view = view;
  }
}

