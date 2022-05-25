import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from '../config';
import { Observable } from 'rxjs';
import { MultiProduct } from '../_models/multi-product';

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
}
