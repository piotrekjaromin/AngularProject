import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'top-nav',
  templateUrl: './topNav.component.html',
  styleUrls: ['./topNav.component.css']
})
export class TopNavComponent {
  @Input() numberOfProduct = 0;
  @Input() price = 0;
  @Output() showCart = new EventEmitter<boolean>();

  showCartProducts(): void {
    this.showCart.emit(true);
  }
}
