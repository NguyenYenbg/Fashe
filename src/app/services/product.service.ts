import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from '../config';
import { Observable } from 'rxjs';
import { MultiProduct } from '../_models/multi-product';
import { SingleProduct } from '../_models/single-product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<MultiProduct> {
    return this.http.get(
      config.apiUrl + `products`
    ) as Observable<MultiProduct>;
  }

  getProduct(id: number): Observable<SingleProduct> {
    return this.http.get(
      config.apiUrl + `products/${id}`
    ) as Observable<SingleProduct>;
  }

  getCategories(): Observable<any> {
    return this.http.get(
      config.apiUrl + `products/categories`
    ) as Observable<any>;
  }

  getProductByCategory(category: string): Observable<MultiProduct> {
    return this.http.get(
      config.apiUrl + `products/category/${category}`
    ) as Observable<MultiProduct>;
  }
}
