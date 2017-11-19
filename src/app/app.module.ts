import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

// components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ProductComponent } from './components/product/product.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { OrderConfirmedComponent } from './components/order-confirmed/order-confirmed.component';

// services
import { ProductsService } from './services/product.service';
import { ShoppingCartService } from './services/shopping-cart.service';

// mocks
import { ProductsData } from './mocks/products';

// routes
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'order-confirmed', component: OrderConfirmedComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CheckoutComponent,
    ProductComponent,
    ShoppingCartComponent,
    OrderConfirmedComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    CommonModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(ProductsData, { delay: 200 }),
    RouterModule.forRoot(appRoutes, { useHash: true }),
  ],
  providers: [
    ProductsService,
    ShoppingCartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
