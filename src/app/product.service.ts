import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ProductService {
  constructor(private http: HttpClient) { }
  getData() {
    return this.http.get('http://smktesting.herokuapp.com/api/products/');
  }
  getProducts() {
    return this.http.get('http://smktesting.herokuapp.com/api/products/').map((response: Response) => {
      return response;
    });
  }

}
