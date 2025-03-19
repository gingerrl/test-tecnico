import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgEventBus } from 'ng-event-bus';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalDeleteComponent } from './components/modal-delete/modal-delete.component';
import { SearchComponent } from './components/search-components/search.component';
import { ClientPageComponent } from './pages/client-page/client-page.component';
import { ModalCustomerComponent } from './pages/client-page/components/modal-customer/modal-customer.component';
import { TableListCustomerComponent } from './pages/client-page/components/table-list-customer/table-list-customer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TableListComponent } from './pages/invoice-page/components/table-list/table-list.component';
import { InvoicePageComponent } from './pages/invoice-page/invoice-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ModalProductComponent } from './pages/product-page/components/modal-product/modal-product.component';
import { TableListProductComponent } from './pages/product-page/components/table-list-product/table-list-product.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ModalUserComponent } from './pages/user-page/components/modal-user/modal-user.component';
import { TableListUserComponent } from './pages/user-page/components/table-list-user/table-list-user.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { ListInvoiceService } from './services/list-invoice.service';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    SearchComponent,
    TableListComponent,
    TableListProductComponent,
    TableListCustomerComponent,
    InvoicePageComponent,
    ProductPageComponent,
    ClientPageComponent,
    ModalProductComponent,
    ModalCustomerComponent,
    ModalDeleteComponent,
    LoginPageComponent,
    HomePageComponent,
    UserPageComponent,
    TableListUserComponent,
    ModalUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  providers: [
    NgEventBus,
    ListInvoiceService
    ],
  bootstrap: [AppComponent],
})
export class AppModule {}
