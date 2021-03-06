import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Md5} from 'ts-md5/dist/md5';
import {UserService} from '../../services/user.service';
import {User} from '../../data/user';
import {ViewService} from "../../services/view.service";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {


  status = ''

  constructor(private userService: UserService, private viewService: ViewService, private cartService: CartService) {
  }

  logout() {
    this.userService.logout(sessionStorage.getItem('token'))
      .subscribe(p => {
        console.log(p);
          if (p.status === 200) {
            this.status = 'success';
            sessionStorage.clear();
            this.cartService.reloadData();
            this.userService.loggerUserSource.next('');
          } else {
            this.status = 'failure';
          }
        }
      );
  }
  changeView(viewValue: string) {
    this.viewService.setView(viewValue);
  }
}
