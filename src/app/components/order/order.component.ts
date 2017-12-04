import {Component} from '@angular/core';
import {OrderService} from '../../services/order.service';
import {Order} from '../../data/order';

@Component({
  selector: 'order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

  orders: Order[] = [];
  selectedOrder = new Order('', '', 0, [], false, '');

  constructor(private orderService: OrderService) {
  }

  onSelect(type: string) {
    console.log(type);
    this.selectedOrder = new Order('', '', 0, [], false, '');
    if (type === 'accepted') {
    this.orderService.getRealizedOrders(sessionStorage.getItem('login')).subscribe( order => {
      this.orders = order;
    });
    } else if (type === 'notAccepted') {
      this.orderService.getNotRealizedOrders(sessionStorage.getItem('login')).subscribe( order => {
        this.orders = order;
      });
    }
  }

  selectOrder(order: Order) {
    this.selectedOrder = order;
  }
}

