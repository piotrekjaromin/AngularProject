import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'left-menu',
  templateUrl: './leftMenu.component.html',
  styleUrls: ['./leftMenu.component.css']
})
export class LeftMenuComponent implements OnInit{
  categories: string[];
  selected: string[] = [];
  @Output() selectedCategories = new EventEmitter<string[]>();

  constructor(private productService: ProductService) {
  }

  onSelect(category: string) {
    const index: number = this.selected.indexOf(category);
    if ( index > -1) {
      this.selected.splice(index, 1);
    } else {
      this.selected.push(category);
    }
    this.selectedCategories.emit(this.selected);
  }

  ngOnInit() {
    this.productService.getCategories().subscribe(data => this.categories = this.removeDuplicate(data.map(d => d.category)));
  }

  private removeDuplicate(categories: string[]): string[] {
    const result: string[] = [];
    for (const category of categories) {
      if (result.indexOf(category) === -1) {
        result.push(category);
      }
    }
    return result;
  }
}

