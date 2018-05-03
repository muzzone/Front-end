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
  @Input() reviews;

  ngOnInit() {
  }

  formSubmit(form: NgForm) {
    form.value.rate ? '' : form.value.rate = '0';
    this.productService.addReview(form.value, this.id).subscribe((response: any) => {
      if (response.success) {
        this.reviews.push({
          rate: form.value.rate,
          text: form.value.text,
          created_by: {email: 'user@user.com '},
          created_at: 'new'
        });
        form.resetForm();
      } else if (response.success === false) {
        alert(response.message);
      } else {
        alert('Something went wrong');
      }
    });
  }
}
