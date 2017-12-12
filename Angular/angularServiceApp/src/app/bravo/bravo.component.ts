import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-bravo',
  templateUrl: './bravo.component.html',
  styleUrls: ['./bravo.component.css']
})
export class BravoComponent implements OnInit {
  numbers: Array<Number> = [];

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.numbers = this._dataService.retrieveNumbers();
  }

}
