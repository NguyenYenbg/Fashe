import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  checkoutForm = new FormGroup({
    full_name: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(20),
    ]),
    address: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(200),
    ]),
    city: new FormControl('', [Validators.required]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]{3}-[0-9]{2}-[0-9]{3}'),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$'),
    ]),
  });

  public products: any = [];
  public grandTotal!: number;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((res) => {
      this.products = res;
      this.products.total = this.products.price * this.products.quatity;
      this.grandTotal = this.cartService.getTotalPrice();
    });
  }

  get full_name() {
    return this.checkoutForm.get('full_name');
  }
  get address() {
    return this.checkoutForm.get('address');
  }
  get city() {
    return this.checkoutForm.get('city');
  }
  get phone() {
    return this.checkoutForm.get('phone');
  }
  get email() {
    return this.checkoutForm.get('email');
  }
}
