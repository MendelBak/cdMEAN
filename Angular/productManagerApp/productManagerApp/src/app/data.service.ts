import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  products: Array<Object> = [
    {'name': 'DSLR Camera', 'price': '499.99'},
    {'name': 'MacBook', 'price': '1999.99'}
  ];

  constructor() { }

  getProducts() {
    return this.products;
  }

  findEditProduct(index) {
    console.log(this.products[index]);
    return this.products[index];
  }

  createNewProduct(product) {
    this.products.push(product);
  }

  editProduct(index, updatedProduct) {
    this.products[index] = (updatedProduct);
  }

  destroyProduct(index) {
    this.products.splice(index, 1);
  }

}
