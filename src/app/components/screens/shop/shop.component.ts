import { Component, OnInit } from '@angular/core';
import { MultiProduct } from 'src/app/_models/multi-product';
import { SingleProduct } from 'src/app/_models/single-product';
import { ProductService } from './../../../services/product.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  products: any;
  filtered: any;
  categories: any;

  constructor(
    private productService: ProductService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 03 seconds */
      this.spinner.hide();
    }, 2000);
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe((res) => {
      this.products = this.filtered = res;
    });
  }
  getCategories() {
    this.productService.getCategories().subscribe((res) => {
      this.categories = res;
    });
  }
  onKeyUp(value: string) {
    this.filtered = this.products.filter((item) =>
      item.title.toLocaleLowerCase().includes(value.trim().toLocaleLowerCase())
    );
  }
}
