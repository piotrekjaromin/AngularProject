import {Component, OnInit} from '@angular/core';
import {CartService} from '../../services/cart.service';
import {Order} from '../../data/order';
import {UserService} from "../../services/user.service";
import {User} from "../../data/user";

@Component({
  selector: 'end-form',
  templateUrl: './endForm.component.html',
  styleUrls: ['./endForm.component.css']
})
export class EndFormComponent implements OnInit {
  fullName = '';
  address = '';
  isSuccess = false;

  user: User;

  constructor(private cartService: CartService, private userService: UserService) {
  }

  ngOnInit(): void {
    // this.userService.
  }

  saveOrder() {

    var login = (sessionStorage.getItem('login') === null) ? '' : sessionStorage.getItem('login');

    this.cartService.saveOrder(new Order(this.fullName,
      this.address,
      JSON.parse(sessionStorage.getItem('cartPrice')),
      JSON.parse(sessionStorage.getItem('shopCart')), false, login)).subscribe(p => {
          if (p.ok) {
            this.isSuccess = true;
            sessionStorage.clear();
            this.cartService.reloadData();
          }
    });

  }

  insertFullname(event: any) {
    this.fullName = event.target.value;
  }

  insertAddress(event: any) {
    this.address = event.target.value;
  }
}

