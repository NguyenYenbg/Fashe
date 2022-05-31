import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/screens/about/about.component';
import { CartComponent } from './components/screens/cart/cart.component';
import { ContactComponent } from './components/screens/contact/contact.component';
import { HomeComponent } from './components/screens/home/home.component';
import { NotFoundComponent } from './components/screens/not-found/not-found.component';
import { ProductDetailComponent } from './components/screens/product-detail/product-detail.component';
import { ShopComponent } from './components/screens/shop/shop.component';

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
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
