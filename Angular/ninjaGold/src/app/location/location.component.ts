import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  @Output() emitter = new EventEmitter();

  locationsArr: Array<Object>;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.locationsArr = this._dataService.getLocation();
  }

  buttonClick(idx) {
    console.log(this.locationsArr[idx].name, 'Button has been clicked');
    this._dataService.calculateGold(idx); // Sending index to know which button was clicked and how much gold to asses.
    this.emitter.emit(); // This Output tells the app component to check for the new value of the gold counter.
  }

}
