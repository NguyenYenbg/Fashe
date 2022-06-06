import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { SingleProduct } from 'src/app/_models/single-product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  product: any;
  //numberProduct: number = 1;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    if (id) {
      this.productService.getProduct(id).subscribe((res) => {
        this.product = res;
      });
    }
  }

  // plusProduct() {
  //   this.numberProduct += 1;
  // }
  // minusPreduct() {
  //   if (this.numberProduct > 1) {
  //     this.numberProduct -= 1;
  //   }
  // }

  addtocart(item: any) {
    this.cartService.addtoCart(item);
  }
}
