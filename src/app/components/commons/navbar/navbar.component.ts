import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  show = false;
  showDropDown;
  public totalItem: number = 0;
  constructor(
    private productService: ProductService,
    private cartService: CartService,
    public authServices: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((res) => {
      this.totalItem = res.length;
    });
    this.showDropDown = true;
  }

  logout() {
    this.show = false;
    this.authServices.logout();
    this.router.navigateByUrl('/'); //tu dong ve home
  }
}
