import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutMeComponent } from './components/screens/about-me/about-me.component';
import { AboutComponent } from './components/screens/about/about.component';
import { CartComponent } from './components/screens/cart/cart.component';
import { CheckoutComponent } from './components/screens/checkout/checkout.component';
import { ContactComponent } from './components/screens/contact/contact.component';
import { HomeComponent } from './components/screens/home/home.component';
import { LoginComponent } from './components/screens/login/login.component';
import { NotFoundComponent } from './components/screens/not-found/not-found.component';
import { ProductDetailComponent } from './components/screens/product-detail/product-detail.component';
import { ResetPasswordComponent } from './components/screens/reset-password/reset-password.component';
import { ShopComponent } from './components/screens/shop/shop.component';
import { SignupComponent } from './components/screens/signup/signup.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'products',
    component: ShopComponent,
  },
  {
    path: 'products/:id',
    component: ProductDetailComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'resetPassword',
    component: ResetPasswordComponent,
  },
  {
    path: 'aboutme',
    component: AboutMeComponent,
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
