import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Http, Response} from '@angular/http';

@Injectable()
export class OrderService {
  getProductHttp = 'http://localhost:5000/orders';
  // getProductHttp = 'http://localhost:2403/users/login';

  constructor(private http: Http) { }

  getOrders() {
    return this.http.get(this.getProductHttp);
  }

  getRealizedOrders(login: String) {
    return this.http.get(this.getProductHttp + '/realized/users/' + login).map((response: Response) => response.json());;
  }

  getNotRealizedOrders(login: String) {
    return this.http.get(this.getProductHttp + '/notrealized/users/' + login).map((response: Response) => response.json());;
  }


}
