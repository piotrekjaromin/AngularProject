import {Component, OnInit} from '@angular/core';
import {CartService} from '../../services/cart.service';
import {Product} from '../../data/product';
import {CartProduct} from '../../data/cartProduct';
import {ViewService} from "../../services/view.service";

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  productFromCart: CartProduct[];

  constructor(private cartService: CartService, private viewService: ViewService) {
  }

  ngOnInit(): void {
    this.cartService.cartProduct.subscribe(products => this.productFromCart = products);
  }

  removeProduct(product: Product) {
    this.cartService.removeProductFromCard(product);
  }

  changeQuantity(product: Product, action: number, productNumber: number) {
    if (action > 0) {
      this.cartService.addProductToCart(product);
    } else if (action < 0 && productNumber > 0) {
      this.cartService.removeOneProductFromCard(product);
    }
  }

  changeView(viewValue: string) {
    this.viewService.setView(viewValue);
  }
}

