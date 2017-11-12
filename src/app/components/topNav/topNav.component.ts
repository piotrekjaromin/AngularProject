import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'top-nav',
  templateUrl: './topNav.component.html',
  styleUrls: ['./topNav.component.css']
})
export class TopNavComponent {
  @Input() numberOfProduct = 0;
  @Input() price = 0;
  @Output() view = new EventEmitter<string>();

  changeView(view: string): void {
    this.view.emit(view);
  }
}
