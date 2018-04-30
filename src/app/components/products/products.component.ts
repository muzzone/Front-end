import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { ProductService } from '../../product.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  httpService = new HttpService();
  products: any[] = [];
  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.products = this.httpService.getProducts();
  }
  getTest() {
      this.productService
      .getData()
        .subscribe((response) => {
          console.log(response);
        });
  }
}
