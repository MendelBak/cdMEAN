import { Component, OnInit } from '@angular/core';
import { MathServiceService } from '../math-service.service';

@Component({
  selector: 'app-charlie',
  templateUrl: './charlie.component.html',
  styleUrls: ['./charlie.component.css']
})
export class CharlieComponent implements OnInit {
  diffAlphaBravo: Number = 0;

  constructor(private _mathService: MathServiceService) { }

  ngOnInit() {
  }

  findSum() {
    this.diffAlphaBravo = this._mathService.findDiff();
  }

}
