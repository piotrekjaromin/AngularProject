import {Component, OnInit} from '@angular/core';
import {ViewService} from '../../services/view.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  view = 'dashboard';

  constructor(private viewService: ViewService) {}

  ngOnInit() {
    this.viewService.view.subscribe(view =>

      this.view = view);
  }
}

