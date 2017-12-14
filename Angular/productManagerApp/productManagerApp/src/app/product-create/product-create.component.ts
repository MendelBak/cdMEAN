import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
// import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  newProduct = {'name': '', 'price': ''};
  products: Array<any> = [];

  constructor(private _dataService: DataService, private _route: Router) {
  }


  ngOnInit() {
  }

  createNewProduct() {
    if (this.newProduct.name.length >= 3) {
      console.log('New product has been created');
      this.products.push(this.newProduct);
      this._dataService.createNewProduct(this.newProduct);
      this.newProduct = {'name': '', 'price': ''};
      this._route.navigateByUrl('/display');
    } else {
      console.log('Your item does not pass backend validations.');
      this.newProduct = {'name': '', 'price': ''};
    }
  }

}
