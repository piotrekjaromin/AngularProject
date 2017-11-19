import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CartComponent} from './components/cart/cart.component';
import {EndFormComponent} from './components/endForm/endForm.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {AppComponent} from './components/main/app.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'cart', component: CartComponent },
  { path: 'end_form', component: EndFormComponent },
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
