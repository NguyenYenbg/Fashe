import { Component, OnInit } from '@angular/core';
import { MultiProduct } from 'src/app/_models/multi-product';
import { SingleProduct } from 'src/app/_models/single-product';
import { ProductService } from './../../../services/product.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  public productList: any;
  public filterCategory: any;
  searchKey: string = '';
  public searchTerm!: string;
  totalLength: number;
  page: number = 1;

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 03 seconds */
      this.spinner.hide();
    }, 2000);

    this.productService.getProducts().subscribe((res) => {
      this.productList = res;
      this.filterCategory = res;
      this.totalLength = res.length;
      this.productList.forEach((a: any) => {
        if (
          a.category === "women's clothing" ||
          a.category === "men's clothing"
        ) {
          a.category = 'fashion';
        }
        Object.assign(a, { quantity: 1, total: a.price });
      });
    });

    this.cartService.search.subscribe((val: any) => {
      this.searchKey = val;
    });
  }

  onKeyUp(value: string) {
    this.filterCategory = this.productList.filter((item) =>
      item.title.toLocaleLowerCase().includes(value.trim().toLocaleLowerCase())
    );
  }
  filter(category: string) {
    this.filterCategory = this.productList.filter((a: any) => {
      if (a.category == category || category == '') {
        return a;
      }
    });
  }
  search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
  }
}
