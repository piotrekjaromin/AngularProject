import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'top-nav',
  templateUrl: './topNav.component.html',
  styleUrls: ['./topNav.component.css']
})
export class TopNavComponent implements OnInit {
  numberOfProduct = 0;
  price = 0;

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.cartService.numberOfProduct.subscribe(number => this.numberOfProduct = number);
    this.cartService.cartPrice.subscribe(price => this.price = price);
  }
}
