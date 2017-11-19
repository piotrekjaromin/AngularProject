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
import {EndFormComponent} from './components/endForm/endForm.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    LeftMenuComponent,
    ListOfProductsComponent,
    TopNavComponent,
    CartComponent,
    EndFormComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [ProductService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule {}
