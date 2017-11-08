import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'left-menu',
  templateUrl: 'leftMenu.component.html',
  styleUrls: ['leftMenu.component.css']
})
export class LeftMenuComponent {
  @Input() categories: string[];
  selected: string[] = [];
  @Output() selectedCategories = new EventEmitter<string[]>();

  onSelect(category: string) {
    const index: number = this.selected.indexOf(category);
    if ( index > -1) {
        this.selected.splice(index, 1);
    } else {
        this.selected.push(category);
    }
    this.selectedCategories.emit(this.selected);
  }
}

