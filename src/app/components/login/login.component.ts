import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { AuthService } from '../../auth.service';
import {Router} from '@angular/router';
import {ProductService} from '../../product.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private productService: ProductService) { }

  ngOnInit() {
  }

  error: boolean = false;
  errorMassage = '';

  submitForm(form: NgForm) {
    this.error = false;

    this.authService.login(form.value).subscribe((response: any) => {
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
