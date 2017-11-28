import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {isUndefined} from "util";

@Component({
  selector: 'left-menu',
  templateUrl: './leftMenu.component.html',
  styleUrls: ['./leftMenu.component.css']
})
export class LeftMenuComponent implements OnInit{
  categories: string[];
  selected: string[] = [];
  @Output() selectedCategories = new EventEmitter<string[]>();
  priceFrom = -1;
  priceTo = -1;
  @Output() priceFilter = new EventEmitter<number>();

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
    this.productService.getCategories().subscribe(data => this.categories = data);
  }
}

