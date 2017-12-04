import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CartService} from '../../services/cart.service';
import {Product} from '../../data/product';
import {SocketService} from "../../services/socket.service";

@Component({
  selector: 'list-of-products',
  templateUrl: './listOfProducts.component.html',
  styleUrls: ['./listOfProducts.component.css']
})
export class ListOfProductsComponent implements OnInit {
  @Input() products: Product;
  @Input() currentPage = 1;
  @Input() numberOfPages: number;
  @Output() currentPageEmiter = new EventEmitter<number>();
  connection;
currentProduct: Product;
  constructor(private cartService: CartService, private socketService: SocketService) {
  }

  ngOnInit() {
    this.currentProduct = new Product('', '', '', 0, '', 0)
    this.connection = this.socketService.getMessage().subscribe( message => {
        this.changePage(1);
      }
    );
  }

  changePage(page: number): void {
    this.currentPageEmiter.emit(page);
  }

  addToCart(product: Product): void {
    this.cartService.addProductToCart(product);
  }

  selectProduct(product: Product): void {
    this.currentProduct = product;
  }

}


