import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  categories: any;
  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.getCategories();
  }
  getCategories() {
    this.productService.getCategories().subscribe((res) => {
      this.categories = res;
    });
  }
}
