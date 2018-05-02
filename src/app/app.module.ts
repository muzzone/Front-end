import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import {Routes, RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {ProductService} from './product.service';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { AddReviewComponent } from './components/add-review/add-review.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { FormsModule } from '@angular/forms';
import {AuthService} from './auth.service';


const appRoutes: Routes = [
  {path:  'Product/:id' , component: SingleProductComponent},
  {path:             '' , component: ProductsComponent},
  {path:        'Login' , component: LoginComponent},
  {path:     'Register' , component: RegistrationComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    SingleProductComponent,
    ReviewsComponent,
    AddReviewComponent,
    LoginComponent,
    RegistrationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AlertModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ProductService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
