import {Component, Input, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ProductService} from '../../product.service';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {

  constructor(private productService: ProductService) { }

  @Input() id: number;

  ngOnInit() {
  }

  formSubmit(form: NgForm) {
    form.value.rate ? '' : form.value.rate = '0';
    this.productService.addReview(form.value, this.id).subscribe((response: any) => {
      if (response.success) {
        console.log(response);
      }

      else if (response.success === false) {
        alert(response.message);
      }

      else {
        alert('Something went wrong');
      }
    });
  }
}
