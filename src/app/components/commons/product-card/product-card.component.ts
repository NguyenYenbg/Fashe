import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input('data') data: any;
  priceRate: number;
  constructor(
    private cartService: CartService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    let rate = (this.data.price * this.data.rating['rate']) / 100;
    this.priceRate = this.data.price - rate;
  }
  addtocart(item: any) {
    this.cartService.addtoCart(item);
    this.toastr.success('You have successfully added !!!');
  }
}
