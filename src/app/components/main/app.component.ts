import {Component, OnInit} from '@angular/core';
import {ViewService} from '../../services/view.service';
import {CartService} from "../../services/cart.service";
import {UserService} from "../../services/user.service";
import {SocketService} from "../../services/socket.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  view = 'dashboard';
  connection;
  changedMessage: string;

  constructor(private viewService: ViewService,
              private cartService: CartService,
              private userService: UserService,
              private socketService: SocketService) {}

  ngOnInit() {
    this.viewService.view.subscribe(view => this.view = view);
    this.cartService.reloadData();
    this.userService.reloadData();

    this.connection = this.socketService.getMessage().subscribe( message => {

        this.changedMessage = message.toString();
      }
    );
  }
  closeMessage() {
    this.changedMessage = '';
  }
}

