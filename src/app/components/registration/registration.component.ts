import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Md5} from 'ts-md5/dist/md5';
import {UserService} from '../../services/user.service';
import {User} from '../../data/user';
import {ViewService} from "../../services/view.service";

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{

  user: User;
  status = '';


  constructor(private userService: UserService, private viewService: ViewService) {
  }

  ngOnInit(): void {
    this.user = new User('', '', '', '', '');
  }

  register() {
    const tmp = this.user.password;
    this.user.password = Md5.hashStr(this.user.password).toString()
    this.userService.registration(this.user)
      .subscribe( p => {
        console.log(p.status)
      if (p.status === 200) {
        this.status = 'success';
        sessionStorage.setItem('token', p.text());
      } else {
        this.status = 'failure';
        this.user.password = tmp;
      }}
    );
  }

  changeView(viewValue: string) {
    this.viewService.setView(viewValue);
  }

}
