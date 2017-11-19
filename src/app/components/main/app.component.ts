import {Component, OnInit} from '@angular/core';
import {Product} from '../../data/product';
import {ProductService} from '../../services/product.service';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private productService: ProductService, private cartService: CartService) {
  }

  ngOnInit(): void {
  }
}

