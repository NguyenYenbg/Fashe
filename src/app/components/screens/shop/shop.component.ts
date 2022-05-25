import { Component, OnInit } from '@angular/core';
import { MultiProduct } from 'src/app/_models/multi-product';
import { SingleProduct } from 'src/app/_models/single-product';
import { ProductService } from './../../../services/product.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  products: MultiProduct;
  categories: any;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }
  getProducts() {
    this.productService.getProducts().subscribe((res) => {
      this.products = res;
    });
  }
  getCategories() {
    this.productService.getCategories().subscribe((res) => {
      this.categories = res;
    });
  }
}
