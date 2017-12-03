import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Md5} from 'ts-md5/dist/md5';
import {UserService} from '../../services/user.service';
import {User} from '../../data/user';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  login: string;
  password: string;
  status = '';


  constructor(private userService: UserService) {
  }

  sendLogin() {
    this.userService.login(new User(this.login, Md5.hashStr(this.password).toString(), '', '', ''))
      .subscribe(p => {
          if (p.status === 200) {
            this.status = 'success';
            sessionStorage.setItem('token', p.text());
            sessionStorage.setItem('login', this.login);
            this.userService.loggerUserSource.next(this.login);
          } else {
            this.status = 'failure';
          }
        }
      );
  }

}
