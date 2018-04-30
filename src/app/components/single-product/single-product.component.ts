import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {
  id: number;
  product: any = {};
  httpService = new HttpService();
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];
    this.product = this.httpService.getProduct(this.id);
  }

}
