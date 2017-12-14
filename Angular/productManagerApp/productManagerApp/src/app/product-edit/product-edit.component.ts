import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  oldProduct: Object = {'name': '', 'price': ''};
  updatedProduct: Object = {'name': '', 'price': ''};
  index = '';


  constructor(private _dataService: DataService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this._route.paramMap.subscribe(params => {
      this.oldProduct = this._dataService.findEditProduct(params.get('index'));
      this.index = params.get('index');
    });
  }

  onSubmit() {
    console.log('Ive been clicked in the onsubmit function');
    console.log('this is the updatedProduct ->', this.updatedProduct);
    this._dataService.editProduct(this.index, this.updatedProduct);
    this._router.navigateByUrl('/display');
  }


}
