import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { AuthService } from '../../auth.service';
import {Router} from '@angular/router';
import {ProductService} from '../../product.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(
    private authService: AuthService, private router: Router, private productService: ProductService) { }

  ngOnInit() {
  }

  error: boolean = false;
  errorMassage = '';

  submitForm(form: NgForm) {
    this.error = false;

    this.authService.register(form.value).subscribe((response: any) => {
      if (response.success) {
        this.authService.authorized(response.token);
        this.router.navigate(['/']);
        this.productService.setProducts();
      }

      else if (response.success === false) {
        this.error = true;
        this.errorMassage = response.message;
      }

      else {
        this.error = true;
        this.errorMassage = 'Something went wrong';
      }
    });
  }

}
