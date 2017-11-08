import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {LeftMenuComponent} from './leftMenu.component';
import {ProductService} from './product.service';
import {FormsModule} from '@angular/forms';
import {ListOfProductsComponent} from './listOfProducts.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftMenuComponent,
    ListOfProductsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {}
