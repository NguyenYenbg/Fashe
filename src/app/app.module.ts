import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { CartComponent } from './components/screens/cart/cart.component';
import { LimitToPipe } from './pipes/limit-to.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrModule } from 'ngx-toastr';
import { ContactComponent } from './components/screens/contact/contact.component';
import { AboutComponent } from './components/screens/about/about.component';
import { LoginComponent } from './components/screens/login/login.component';
import { SignupComponent } from './components/screens/signup/signup.component';
import { ResetPasswordComponent } from './components/screens/reset-password/reset-password.component';
import { AboutMeComponent } from './components/screens/about-me/about-me.component';

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
    CartComponent,
    LimitToPipe,
    ContactComponent,
    AboutComponent,
    LoginComponent,
    SignupComponent,
    ResetPasswordComponent,
    AboutMeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
