import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  httpService = new HttpService();
  products: any[] = [];
  constructor() {
  }

  ngOnInit() {
    this.products = this.httpService.getProducts();
  }


}
