import { Injectable } from '@angular/core';

@Injectable()
export class MathServiceService {
  alphaArr: Array<Number> = [1, 2, 3];
  bravoArr: Array<Number> = [1, 1, 1];
  results: Number;

  constructor() { }

  retrieveNumbersAlpha(): Array<Number> {
    return this.alphaArr;
  }
  retrieveNumbersBravo(): Array<Number> {
    return this.bravoArr;
  }

  findDiff() {
    let sum1: Number = 0;
    let sum2: Number = 0;
    for (let i of this.alphaArr) {
      sum1 += i;
    }
    for (let i of this.bravoArr) {
      sum2 += i;
      console.log(sum1, sum2);
    }
    console.log(sum1, sum2);
    this.results = sum1 -= sum2;
    console.log(this.results);
    return this.results;
  }

}
