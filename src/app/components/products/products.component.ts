import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  constructor(private productService: ProductService, public authService: AuthService) {}

  products;
  authToken = '';

  ngOnInit() {
    this.productService.products_.subscribe((data) => {
      this.products = data;
    });
    this.authService.getToken_().subscribe((token: any) => {
      this.authToken = token;
    });
  }
}
