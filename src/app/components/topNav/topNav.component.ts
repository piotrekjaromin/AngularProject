import {Component, OnInit} from '@angular/core';
import {CartService} from '../../services/cart.service';
import {UserService} from "../../services/user.service";
import {ViewService} from "../../services/view.service";

@Component({
  selector: 'top-nav',
  templateUrl: './topNav.component.html',
  styleUrls: ['./topNav.component.css']
})
export class TopNavComponent implements OnInit {
  numberOfProduct = 0;
  price = 0;
  loggedUser = '';

  constructor(private cartService: CartService, private userService: UserService, private viewService: ViewService) {
  }

  ngOnInit(): void {
    this.cartService.numberOfProduct.subscribe(number => this.numberOfProduct = number);
    this.cartService.cartPrice.subscribe(price => this.price = price);
    this.userService.loggedUser.subscribe(user => this.loggedUser = user);
  }

  changeView(viewValue: string) {
    this.viewService.setView(viewValue);
  }
}
