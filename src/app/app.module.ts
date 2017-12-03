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
import {LoginComponent} from "./components/login/login.component";
import {UserService} from "./services/user.service";
import {RegistrationComponent} from "./components/registration/registration.component";
import {LogoutComponent} from "./components/logout/logout.component";
import {OrderComponent} from "./components/order/order.component";
import {OrderService} from "./services/order.service";

@NgModule({
  declarations: [
    AppComponent,
    LeftMenuComponent,
    ListOfProductsComponent,
    TopNavComponent,
    CartComponent,
    EndFormComponent,
    DashboardComponent,
    LoginComponent,
    RegistrationComponent,
    LogoutComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
  ],
  providers: [ProductService, CartService, UserService, OrderService],
  bootstrap: [AppComponent]
})
export class AppModule {}
