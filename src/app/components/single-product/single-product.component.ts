import {Component, OnInit} from '@angular/core';
import { ProductService } from '../../product.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit{

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
    this.productService.getProducts_().subscribe((data: any) => {
      this.product = data.filter((item) => item.id === this.id)[0];
    });

    this.productService.getReviews(this.id).subscribe((reviews) => {
      this.reviews = reviews;
    });
  }
}
