import { Component, OnInit } from '@angular/core';
import { MathServiceService } from '../math-service.service';

@Component({
  selector: 'app-bravo',
  templateUrl: './bravo.component.html',
  styleUrls: ['./bravo.component.css']
})
export class BravoComponent implements OnInit {
  bravoArr: Array<Number> = [];

  constructor(private _mathService: MathServiceService) { }

  ngOnInit() {
    this.bravoArr = this._mathService.retrieveNumbersBravo();
  }

  randNumBravo() {
    this.bravoArr.push(Math.floor((Math.random() * 100) + 1));
   }

}
