import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import {Routes, RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {ProductService} from './product.service';


const appRoutes: Routes = [
  {path: 'Product/:id' , component: SingleProductComponent},
  {path: '' , component: ProductsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    SingleProductComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AlertModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
