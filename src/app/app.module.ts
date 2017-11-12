import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import { AppComponent } from './components/main/app.component';
import {LeftMenuComponent} from './components/leftMenu/leftMenu.component';
import {ProductService} from './services/product.service';
import {FormsModule} from '@angular/forms';
import {ListOfProductsComponent} from './components/productsContent/listOfProducts.component';
import {TopNavComponent} from './components/topNav/topNav.component';
import {CartService} from './services/cart.service';
import {CartComponent} from './components/cart/cart.component';
import {EndFormComponent} from "./components/endForm/endForm.component";

@NgModule({
  declarations: [
    AppComponent,
    LeftMenuComponent,
    ListOfProductsComponent,
    TopNavComponent,
    CartComponent,
    EndFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ProductService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule {}
