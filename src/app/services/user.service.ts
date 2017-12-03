import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import {User} from '../data/user';
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class UserService {
   getProductHttp = 'http://localhost:5000/users';
  // getProductHttp = 'http://localhost:2403/users/login';

  constructor(private http: Http) { }

  public loggerUserSource: BehaviorSubject<string> = new BehaviorSubject('');
  loggedUser = this.loggerUserSource.asObservable();


  login(user: User) {
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions(headers);
    return this.http.post(this.getProductHttp + '/login', user, options);
  }
  registration(user: User) {
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions(headers);
    return this.http.post(this.getProductHttp, user, options);
  }

  logout(token: string) {

    let headers = new Headers({'token': token});
    const options = new RequestOptions({headers: headers});
    return this.http.post(this.getProductHttp + '/logout', null, options);
  }

}
