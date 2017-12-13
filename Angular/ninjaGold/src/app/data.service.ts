import { Injectable, Output } from '@angular/core';

@Injectable()
export class DataService {

  locations: Array<any> = [{ name: 'Farm', gold: '2-5', selection: 'Farm!' }, { name: 'Cave', gold: '5-10', selection: 'Cave Dive!' },
  { name: 'Casino', gold: 'Earn or Lose up to 100', selection: 'Gamble...' }, { name: 'House', gold: '7-15', selection: 'Do Chores!' }];


  constructor() { }
  goldCount = 0;
  captainsLog: Array<String> = [];

  getLocation() {
    return this.locations;
  }
  calculateGold(idx) {
    if (this.locations[idx].name === 'Farm') {
      const earnedGold = (Math.floor(Math.random() * (6 - 2) + 2));
      this.goldCount =  this.goldCount + earnedGold;
      this.captainsLog.push(`You've earned ${earnedGold} gold from the Farm!`);
    }
    if (this.locations[idx].name === 'Cave') {
      const earnedGold = (Math.floor(Math.random() * (11 - 5) + 5));
      this.goldCount += earnedGold;
      this.captainsLog.push(`You've earned ${earnedGold} gold from the Cave!`);
    }
    if (this.locations[idx].name === 'Casino') {
      const earnedGold = Math.floor(Math.random() * 201) - 100;
      this.goldCount += earnedGold;
      if (earnedGold > 0) {
        this.captainsLog.push(`You've earned ${earnedGold} gold from the Casino!`);
      }
      else {
        this.captainsLog.push(`You've lost ${earnedGold} gold from the Casino!`);
      }
    }
    if (this.locations[idx].name === 'House') {
      const earnedGold = (Math.floor(Math.random() * (16 - 7) + 7));
      this.goldCount += earnedGold;
      this.captainsLog.push(`You've earned ${earnedGold} gold from the House!`);
    }
  }

}
