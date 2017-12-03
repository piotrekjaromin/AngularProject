import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CartComponent} from './components/cart/cart.component';
import {EndFormComponent} from './components/endForm/endForm.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {AppComponent} from './components/main/app.component';
import {LoginComponent} from './components/login/login.component';
import {RegistrationComponent} from './components/registration/registration.component';
import {LogoutComponent} from './components/logout/logout.component';
import {OrderComponent} from "./components/order/order.component";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'cart', component: CartComponent },
  { path: 'end_form', component: EndFormComponent },
  { path: 'login', component: LoginComponent},
  { path: 'registration', component: RegistrationComponent},
  { path: 'logout', component: LogoutComponent},
  { path: 'orders', component: OrderComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  declarations: [
    AppComponent,
    DashboardComponent,
    CartComponent,
    EndFormComponent
  ],
})

export class AppRoutingModule {}
