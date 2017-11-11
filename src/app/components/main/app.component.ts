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
  showCart = false;

  constructor(private productService: ProductService, private cartService: CartService) {
  }

  getProducts(categories: string[], currentPage: number): void {
    this.products = this.productService.getProducts(categories, currentPage);
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
    this.getProducts(this.categories, this.currentPage);
    this.getNumberOfPages(this.categories);
  }

  changeSelectedCategory(categories: string[]): void {
    this.selectedCategories = categories;
    this.getProducts(this.selectedCategories, this.currentPage);
    this.getNumberOfPages(categories);
  }

  getProductWithCategory(categories: string[]): Product[] {
    return this.products.filter(product => categories.indexOf(product.category) > -1);
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

  switchView() {
    this.showCart = !this.showCart;
  }
}

