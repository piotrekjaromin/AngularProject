import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Md5} from 'ts-md5/dist/md5';
import {UserService} from '../../services/user.service';
import {User} from '../../data/user';

@Component({
  selector: 'logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {


  status = ''

  constructor(private userService: UserService) {
  }

  logout() {
    this.userService.logout(sessionStorage.getItem('token'))
      .subscribe(p => {
        console.log(p);
          if (p.status === 200) {
            this.status = 'success';
            sessionStorage.setItem('token', '');
            sessionStorage.setItem('login', '');
            this.userService.loggerUserSource.next('');
          } else {
            this.status = 'failure';
          }
        }
      );
  }

}
