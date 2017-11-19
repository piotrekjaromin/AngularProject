import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../data/product';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'end-form',
  templateUrl: './endForm.component.html',
  styleUrls: ['./endForm.component.css']
})
export class EndFormComponent implements OnInit {

  cartProducts: Product[];

  fullName = 'fghdfgh';
  address = 'asdfasdf';

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.cartService.cartProduct.subscribe(products => this.cartProducts = products);
  }

  saveOrder() {
    console.log('fullName: ' + this.fullName);
    console.log('address: ' + this.address);
    this.cartService.saveOrder(this.fullName, this.address, this.cartProducts);
  }
}

