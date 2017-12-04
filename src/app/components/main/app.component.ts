import {Component, OnInit} from '@angular/core';
import {ViewService} from '../../services/view.service';
import {CartService} from "../../services/cart.service";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  view = 'dashboard';

  constructor(private viewService: ViewService, private cartService: CartService, private userService: UserService) {}

  ngOnInit() {
    this.viewService.view.subscribe(view => this.view = view);
    this.cartService.reloadData();
    this.userService.reloadData();
  }
}

