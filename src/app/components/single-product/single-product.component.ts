import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {

  reviews;
  product = {
    id: 0,
    title: '',
    img: '',
    text: ''
  };
  id = +this.route.snapshot.params['id'];

  constructor(private route: ActivatedRoute, private productService: ProductService) {}

  ngOnInit() {
    const products = this.productService.products;
    if (!products) {
      this.productService.getProducts().subscribe((prod) => {
        this.findSingleProduct(prod);
      });
    } else {
      this.findSingleProduct(products);
    }

    this.productService.getReviews(this.id).subscribe((reviews) => {
      this.reviews = reviews;
    });
  }

  findSingleProduct(products) {
    let product;
    const id = this.id;

     products.map( function (prod) {
       if (id === prod.id) {
         product = prod;
         return;
       }});
     this.product = product;
  }
}
