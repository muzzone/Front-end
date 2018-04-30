import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  // constructor(private http: HttpClient) { }
  products = [
    {
      id: 1,
      Title: 'Product1',
      Image: 'https://vodopad.ru/info/images/box.png',
      Text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur'
    },
    {
      id: 2,
      Title: 'Product2',
      Image: 'https://vodopad.ru/info/images/box.png',
      Text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur'
    },
    {
      id: 3,
      Title: 'Product3',
      Image: 'https://vodopad.ru/info/images/box.png',
      Text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur'
    },
    {
      id: 4,
      Title: 'Product4',
      Image: 'https://vodopad.ru/info/images/box.png',
      Text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur'
    },
  ];
  getProducts() {
    return this.products;
  }
  getProduct(id: number) {
    let singleProduct: any;
    this.products.map(function (prod) {
      if (id === prod.id) {
        singleProduct = prod;
        return;
      }
    });
    return singleProduct;
  }

}
