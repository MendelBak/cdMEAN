import { Component, OnInit } from '@angular/core';
import { MathServiceService } from '../math-service.service';

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent implements OnInit {
  alphaArr: Array<Number> = [];


  constructor(private _mathService: MathServiceService) { }

  ngOnInit() {
    this.alphaArr = this._mathService.retrieveNumbersAlpha();
  }

  randNumAlpha() {
    this.alphaArr.push(Math.floor((Math.random() * 100) + 1));
   }

}
