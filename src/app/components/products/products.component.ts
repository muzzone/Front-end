import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products;
  constructor(private productService: ProductService, private authService: AuthService) {
  }

  ngOnInit() {
    this.productService
      .getData()
      .subscribe((response) => {
        this.products = response;
      });
  }
}
