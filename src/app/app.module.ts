import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/commons/navbar/navbar.component';
import { FooterComponent } from './components/commons/footer/footer.component';
import { PaginationComponent } from './components/commons/pagination/pagination.component';
import { ProductCardComponent } from './components/commons/product-card/product-card.component';
import { HomeComponent } from './components/screens/home/home.component';
import { NotFoundComponent } from './components/screens/not-found/not-found.component';
import { ShopComponent } from './components/screens/shop/shop.component';
import { ProductDetailComponent } from './components/screens/product-detail/product-detail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    PaginationComponent,
    ProductCardComponent,
    HomeComponent,
    NotFoundComponent,
    ShopComponent,
    ProductDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    NgxSpinnerModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
