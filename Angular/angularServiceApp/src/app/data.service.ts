import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  numbers: Array<Number> = [1, 2, 3];

  constructor() { }

  retrieveNumbers(): Array<Number> {
    return this.numbers;
  }

  addNumber(num: Number) {
    this.numbers.push(num);
  }

}
