import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.css']
})
export class ProductDisplayComponent implements OnInit {
  products: Array<any> = [];

  constructor(private _dataService: DataService, private _route: ActivatedRoute) {
    this._route.paramMap.subscribe(params => {
      // console.log(params.get('id'));
    });
  }

  ngOnInit() {
    this.products = this._dataService.getProducts();
}

  destroyProduct(idx) {
    this._dataService.destroyProduct(idx);
  }

}
