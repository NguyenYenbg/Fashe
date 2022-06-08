import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  public products: any = [];
  public grandTotal!: number;
  constructor(
    private cartService: CartService,
    public authServices: AuthService,
    private router: Router,
    config: NgbModalConfig,
    private modalService: NgbModal
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((res) => {
      this.products = res;
      this.products.total = this.products.price * this.products.quatity;
      this.grandTotal = this.cartService.getTotalPrice();
    });
    console.log(this.products);
  }
  removeItem(item: any) {
    this.cartService.removeCartItem(item);
  }
  emptycart() {
    this.cartService.removeAllCart();
  }

  gotoLogin() {
    this.router.navigateByUrl('/login');
  }

  open(content) {
    if (!this.authServices.isAuthenticated()) {
      this.modalService.open(content);
    } else {
      this.router.navigateByUrl('/checkout');
    }
  }
}
