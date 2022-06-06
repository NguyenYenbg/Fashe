import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cartItemList: any = [];
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>('');
  public numberProduct: number = 1;

  constructor() {}
  getProducts() {
    return this.productList.asObservable();
  }
  setProduct(product: any) {
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  addtoCart(product: any) {
    let count = 0;
    if (this.cartItemList.length === 0) {
      this.cartItemList.push(product);
      this.productList.next(this.cartItemList);
      this.getTotalPrice();
    } else {
      for (let i = 0; i < this.cartItemList.length; i++) {
        if (product.id === this.cartItemList[i].id) {
          this.cartItemList[i].quantity += this.numberProduct;
          this.cartItemList[i].total *= this.cartItemList[i].quantity;
          this.productList.next(this.cartItemList);
          this.getTotalPrice();
          count++;
        }
      }
      if (count === 0) {
        this.cartItemList.push(product);
        this.productList.next(this.cartItemList);
        this.getTotalPrice();
      }
    }
    console.log(this.cartItemList);
  }
  getTotalPrice(): number {
    let grandTotal = 0;
    this.cartItemList.map((a: any) => {
      grandTotal += a.total;
    });
    return grandTotal;
  }
  removeCartItem(product: any) {
    this.cartItemList.map((a: any, index: any) => {
      if (product.id === a.id) {
        this.cartItemList.splice(index, 1);
      }
    });
    this.productList.next(this.cartItemList);
  }
  removeAllCart() {
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }
}
